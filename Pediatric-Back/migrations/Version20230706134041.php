<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230706134041 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE courbe (id INT AUTO_INCREMENT NOT NULL, dossier_id INT DEFAULT NULL, age INT DEFAULT NULL, height INT DEFAULT NULL, weight INT DEFAULT NULL, INDEX IDX_45474CA9611C0C56 (dossier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE courbe ADD CONSTRAINT FK_45474CA9611C0C56 FOREIGN KEY (dossier_id) REFERENCES dossier (id)');
        $this->addSql('ALTER TABLE anti_familiaux CHANGE pathologie_familiale pathologie_familiale VARCHAR(100) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE courbe DROP FOREIGN KEY FK_45474CA9611C0C56');
        $this->addSql('DROP TABLE courbe');
        $this->addSql('ALTER TABLE anti_familiaux CHANGE pathologie_familiale pathologie_familiale VARCHAR(255) DEFAULT NULL');
    }
}
