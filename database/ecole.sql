CREATE DATABASE ecole;
USE ecole;

-- Création de la table "Étudiants"
CREATE TABLE Étudiants (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nom VARCHAR(50),
    Prénom VARCHAR(50),
    DateNaissance DATE,
    Email VARCHAR(100)
);

-- Insertion de données dans la table "Étudiants"
INSERT INTO Étudiants (Nom, Prénom, DateNaissance, Email)
VALUES
    ('Dupont', 'Jean', '1995-05-10', 'jean.dupont@example.com'),
    ('Martin', 'Sophie', '1998-09-15', 'sophie.martin@example.com'),
    ('Tremblay', 'Pierre', '1997-03-20', 'pierre.tremblay@example.com');

-- Création de la table "Cours"
CREATE TABLE Cours (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Titre VARCHAR(100),
    Description TEXT,
    Enseignant VARCHAR(50)
);

-- Insertion de données dans la table "Cours"
INSERT INTO Cours (Titre, Description, Enseignant)
VALUES
    ('Mathématiques Avancées', 'Cours de mathématiques avancées pour les étudiants en sciences.', 'Professeur Smith'),
    ('Programmation Java', 'Cours de programmation Java pour les étudiants en informatique.', 'Professeur Johnson'),
    ('Anglais', 'Cours d''anglais pour les étudiants en arts visuels.', 'Professeur Williams');

-- Création de la table "Inscriptions"
CREATE TABLE Inscriptions (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ÉtudiantID INT,
    CoursID INT,
    DateInscription DATE
);

-- Insertion de données dans la table "Inscriptions"
INSERT INTO Inscriptions (ÉtudiantID, CoursID, DateInscription)
VALUES
    (1, 1, '2023-01-15'),
    (2, 2, '2023-02-10'),
    (3, 3, '2023-03-05');

-- Création de la table "Notes"
CREATE TABLE Notes (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ÉtudiantID INT,
    CoursID INT,
    Note DECIMAL(5, 2)
);

-- Insertion de données dans la table "Notes"
INSERT INTO Notes (ÉtudiantID, CoursID, Note)
VALUES
    (1, 1, 85.50),
    (2, 2, 92.75),
    (3, 3, 78.00);
