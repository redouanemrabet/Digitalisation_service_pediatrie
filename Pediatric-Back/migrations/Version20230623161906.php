<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230623161906 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE paraclinique CHANGE age_osseux age_osseux INT DEFAULT NULL, CHANGE age_chronologique age_chronologique INT DEFAULT NULL, CHANGE caryotype_sanguin caryotype_sanguin VARCHAR(100) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE paraclinique CHANGE age_osseux age_osseux VARCHAR(100) DEFAULT NULL, CHANGE age_chronologique age_chronologique VARCHAR(100) DEFAULT NULL, CHANGE caryotype_sanguin caryotype_sanguin INT DEFAULT NULL');
    }
}
