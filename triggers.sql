DROP TRIGGER IF EXISTS UpdateDateInscription;
DROP TRIGGER IF EXISTS DeleteStudent;
DROP TRIGGER IF EXISTS DeleteCourse;
DROP PROCEDURE IF EXISTS StudentCourseList;
DROP PROCEDURE IF EXISTS StudentNotesAverage;

DELIMITER $$
    CREATE TRIGGER UpdateDateInscription BEFORE INSERT ON course_student
    FOR EACH ROW
    BEGIN
        SET NEW.date_inscription = NOW();
    END $$
    
    CREATE TRIGGER DeleteStudent BEFORE DELETE ON students
    FOR EACH ROW
    BEGIN
        DELETE FROM course_student WHERE student_id = OLD.id;
    END $$
    
    CREATE TRIGGER DeleteCourse BEFORE DELETE ON courses
    FOR EACH ROW
    BEGIN
        DELETE FROM course_student WHERE course_id = OLD.id;
    END $$
    
    CREATE PROCEDURE StudentCourseList(IN id INT)
    BEGIN
        SELECT C.title
        FROM courses C
        INNER JOIN course_student CS ON C.id = CS.course_id
        WHERE CS.student_id = id;
    END $$

    CREATE PROCEDURE StudentNotesAverage(IN id INT)
    BEGIN
        SELECT ROUND(AVG(CS.notes))
        AS 'average'
        FROM course_student CS
        WHERE student_id = id;
    END $$
    DELIMITER ;