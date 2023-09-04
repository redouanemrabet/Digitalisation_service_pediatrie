<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230613163029 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, type VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE dossier (id INT AUTO_INCREMENT NOT NULL, type_id INT NOT NULL, patient_id INT NOT NULL, INDEX IDX_3D48E037C54C8C93 (type_id), INDEX IDX_3D48E0376B899279 (patient_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE patient (id INT AUTO_INCREMENT NOT NULL, fullname VARCHAR(255) NOT NULL, ip INT NOT NULL, ville VARCHAR(255) NOT NULL, jour INT NOT NULL, mois INT NOT NULL, annee INT NOT NULL, sexe VARCHAR(255) NOT NULL, telephone VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE dossier ADD CONSTRAINT FK_3D48E037C54C8C93 FOREIGN KEY (type_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE dossier ADD CONSTRAINT FK_3D48E0376B899279 FOREIGN KEY (patient_id) REFERENCES patient (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE dossier DROP FOREIGN KEY FK_3D48E037C54C8C93');
        $this->addSql('ALTER TABLE dossier DROP FOREIGN KEY FK_3D48E0376B899279');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE dossier');
        $this->addSql('DROP TABLE patient');
    }
}
