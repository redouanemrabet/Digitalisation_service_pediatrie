<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230623160458 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE paraclinique (id INT AUTO_INCREMENT NOT NULL, dossier_id INT NOT NULL, age_osseux VARCHAR(100) DEFAULT NULL, age_chronologique VARCHAR(100) DEFAULT NULL, gb INT DEFAULT NULL, plt INT DEFAULT NULL, hb INT DEFAULT NULL, vgm INT DEFAULT NULL, tcmh INT DEFAULT NULL, ca INT DEFAULT NULL, ph INT DEFAULT NULL, k INT DEFAULT NULL, na INT DEFAULT NULL, oestradiol INT DEFAULT NULL, testosterone INT DEFAULT NULL, lh INT DEFAULT NULL, fsh INT DEFAULT NULL, ferritinemie INT DEFAULT NULL, ig_aanti_transglutaminases INT DEFAULT NULL, ig_atotaux INT DEFAULT NULL, ac_anti_endomysium INT DEFAULT NULL, biopcie_jejunale INT DEFAULT NULL, ft4 INT DEFAULT NULL, tsh INT DEFAULT NULL, igf_1 INT DEFAULT NULL, tests_stimulation_hormone_croissance INT DEFAULT NULL, caryotype_sanguin INT DEFAULT NULL, uree INT DEFAULT NULL, creatininemie INT DEFAULT NULL, vs INT DEFAULT NULL, crp INT DEFAULT NULL, autres_familiaux INT DEFAULT NULL, insuline_jj INT DEFAULT NULL, insuline_mm INT DEFAULT NULL, insuline_aa INT DEFAULT NULL, insuline_glycap0 INT DEFAULT NULL, insuline_glycap15 INT DEFAULT NULL, insuline_glycap30 INT DEFAULT NULL, insuline_glycap45 INT DEFAULT NULL, insuline_glycap60 INT DEFAULT NULL, insuline_glycap90 INT DEFAULT NULL, insuline_glycap120 INT DEFAULT NULL, insuline_glyvein0 INT DEFAULT NULL, insuline_glyvein15 INT DEFAULT NULL, insuline_glyvein30 INT DEFAULT NULL, insuline_glyvein45 INT DEFAULT NULL, insuline_glyvein60 INT DEFAULT NULL, insuline_glyvein90 INT DEFAULT NULL, insuline_glyvein120 INT DEFAULT NULL, insuline_gh0 INT DEFAULT NULL, insuline_gh15 INT DEFAULT NULL, insuline_gh30 INT DEFAULT NULL, insuline_gh45 INT DEFAULT NULL, insuline_gh60 INT DEFAULT NULL, insuline_gh90 INT DEFAULT NULL, insuline_gh120 INT DEFAULT NULL, insuline_cortisol0 INT DEFAULT NULL, insuline_cortisol15 INT DEFAULT NULL, insuline_cortisol30 INT DEFAULT NULL, insuline_cortisol45 INT DEFAULT NULL, insuline_cortisol60 INT DEFAULT NULL, insuline_cortisol90 INT DEFAULT NULL, insuline_cortisol120 INT DEFAULT NULL, insuline_acth0 INT DEFAULT NULL, insuline_acth15 INT DEFAULT NULL, insuline_acth30 INT DEFAULT NULL, insuline_acth45 INT DEFAULT NULL, insuline_acth60 INT DEFAULT NULL, insuline_acth90 INT DEFAULT NULL, insuline_acth120 INT DEFAULT NULL, ldopa_glycap0 INT DEFAULT NULL, ldopa_glycap15 INT DEFAULT NULL, ldopa_glycap30 INT DEFAULT NULL, ldopa_glycap45 INT DEFAULT NULL, ldopa_glycap60 INT DEFAULT NULL, ldopa_glycap90 INT DEFAULT NULL, ldopa_glycap120 INT DEFAULT NULL, ldopa_glyvein0 INT DEFAULT NULL, ldopa_glyvein15 INT DEFAULT NULL, ldopa_glyvein30 INT DEFAULT NULL, ldopa_glyvein45 INT DEFAULT NULL, ldopa_glyvein60 INT DEFAULT NULL, ldopa_glyvein90 INT DEFAULT NULL, ldopa_glyvein120 INT DEFAULT NULL, ldopa_gh0 INT DEFAULT NULL, ldopa_gh15 INT DEFAULT NULL, ldopa_gh30 INT DEFAULT NULL, ldopa_gh45 INT DEFAULT NULL, ldopa_gh60 INT DEFAULT NULL, ldopa_gh90 INT DEFAULT NULL, ldopa_gh120 INT DEFAULT NULL, ldopa_cortisol0 INT DEFAULT NULL, ldopa_cortisol15 INT DEFAULT NULL, ldopa_cortisol30 INT DEFAULT NULL, ldopa_cortisol45 INT DEFAULT NULL, ldopa_cortisol60 INT DEFAULT NULL, ldopa_cortisol90 INT DEFAULT NULL, ldopa_cortisol120 INT DEFAULT NULL, ldopa_acth0 INT DEFAULT NULL, ldopa_acth15 INT DEFAULT NULL, ldopa_acth30 INT DEFAULT NULL, ldopa_acth45 INT DEFAULT NULL, ldopa_acth60 INT DEFAULT NULL, ldopa_acth90 INT DEFAULT NULL, ldopa_acth120 INT DEFAULT NULL, telephone INT DEFAULT NULL, INDEX IDX_10677ADC611C0C56 (dossier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE paraclinique ADD CONSTRAINT FK_10677ADC611C0C56 FOREIGN KEY (dossier_id) REFERENCES dossier (id)');
        $this->addSql('ALTER TABLE anti_familiaux CHANGE diarrhee diarrhee TINYINT(1) DEFAULT NULL, CHANGE vomissements vomissements TINYINT(1) DEFAULT NULL, CHANGE distension_abominale distension_abominale TINYINT(1) DEFAULT NULL, CHANGE cephalees cephalees TINYINT(1) DEFAULT NULL, CHANGE troubles_visuels troubles_visuels TINYINT(1) DEFAULT NULL, CHANGE vomissements_htic vomissements_htic TINYINT(1) DEFAULT NULL, CHANGE constipation constipation TINYINT(1) DEFAULT NULL, CHANGE rectorragies rectorragies TINYINT(1) DEFAULT NULL, CHANGE douleur_abdominale douleur_abdominale TINYINT(1) DEFAULT NULL, CHANGE paleur paleur TINYINT(1) DEFAULT NULL, CHANGE asthenie asthenie TINYINT(1) DEFAULT NULL, CHANGE anorexie anorexie TINYINT(1) DEFAULT NULL, CHANGE boulimie boulimie TINYINT(1) DEFAULT NULL, CHANGE syndrome_polyuro_polydipsique syndrome_polyuro_polydipsique TINYINT(1) DEFAULT NULL');
        $this->addSql('ALTER TABLE examen_physique CHANGE bu bu VARCHAR(100) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE paraclinique DROP FOREIGN KEY FK_10677ADC611C0C56');
        $this->addSql('DROP TABLE paraclinique');
        $this->addSql('ALTER TABLE anti_familiaux CHANGE diarrhee diarrhee VARCHAR(150) DEFAULT NULL, CHANGE vomissements vomissements VARCHAR(150) DEFAULT NULL, CHANGE distension_abominale distension_abominale VARCHAR(150) DEFAULT NULL, CHANGE cephalees cephalees VARCHAR(150) DEFAULT NULL, CHANGE troubles_visuels troubles_visuels VARCHAR(150) DEFAULT NULL, CHANGE vomissements_htic vomissements_htic VARCHAR(150) DEFAULT NULL, CHANGE constipation constipation VARCHAR(150) DEFAULT NULL, CHANGE rectorragies rectorragies VARCHAR(150) DEFAULT NULL, CHANGE douleur_abdominale douleur_abdominale VARCHAR(150) DEFAULT NULL, CHANGE paleur paleur VARCHAR(100) DEFAULT NULL, CHANGE asthenie asthenie VARCHAR(100) DEFAULT NULL, CHANGE anorexie anorexie VARCHAR(100) DEFAULT NULL, CHANGE boulimie boulimie VARCHAR(100) DEFAULT NULL, CHANGE syndrome_polyuro_polydipsique syndrome_polyuro_polydipsique VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE examen_physique CHANGE bu bu INT DEFAULT NULL');
    }
}
