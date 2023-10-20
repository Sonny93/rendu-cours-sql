import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  public async up() {
    this.raw(`
    DELIMITER $$
    CREATE TRIGGER UpdateDateInscription BEFORE INSERT ON registrations
    FOR EACH ROW
    BEGIN
        SET NEW.date_inscription = NOW();
    END $$
    DELIMITER ;
    
    DELIMITER $$
    CREATE TRIGGER DeleteStudent AFTER DELETE ON students
    FOR EACH ROW
    BEGIN
        DELETE FROM registrations WHERE student_id = OLD.id;
        DELETE FROM notes WHERE student_id = OLD.id;
    END $$
    DELIMITER ;
    
    DELIMITER $$
    CREATE TRIGGER DeleteCourse AFTER DELETE ON courses
    FOR EACH ROW
    BEGIN
        DELETE FROM registrations WHERE course_id = OLD.id;
        DELETE FROM notes WHERE course_id = OLD.id;
    END $$
    DELIMITER ;
    
    DELIMITER $$
    CREATE PROCEDURE StudentCourseList(IN id INT)
    BEGIN
        SELECT C.title
        FROM courses C
        INNER JOIN registrations R ON C.id = R.course_id
        WHERE R.student_id = id;
    END $$
    DELIMITER ;
     
    DELIMITER $$
    CREATE PROCEDURE StudentNotesAverage(IN id INT)
    BEGIN
        SELECT ROUND(AVG(notes))
        FROM notes
        WHERE student_id = id;
    END $$
    DELIMITER ;
    `);
  }

  down() {
    this.raw(`
      DROP TRIGGER IF EXISTS UpdateDateInscription;
      DROP TRIGGER IF EXISTS DeleteStudent;
      DROP TRIGGER IF EXISTS DeleteCourse;
      DROP PROCEDURE IF EXISTS StudentCourseList;
      DROP PROCEDURE IF EXISTS StudentNotesAverage;
    `);
  }
}
