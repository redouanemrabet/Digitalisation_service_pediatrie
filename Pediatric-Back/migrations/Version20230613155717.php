<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230613155717 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE antecedents_familiaux DROP FOREIGN KEY FK_EF8C547B611C0C56');
        $this->addSql('ALTER TABLE antecedents_personnels DROP FOREIGN KEY FK_93006182611C0C56');
        $this->addSql('ALTER TABLE diagno_and_pec DROP FOREIGN KEY FK_BF65B111611C0C56');
        $this->addSql('ALTER TABLE doctor DROP FOREIGN KEY FK_1FC0F36AED5CA9E6');
        $this->addSql('ALTER TABLE doctor DROP FOREIGN KEY FK_1FC0F36AA76ED395');
        $this->addSql('ALTER TABLE doctor_patient DROP FOREIGN KEY FK_8977B44687F4FB17');
        $this->addSql('ALTER TABLE doctor_patient DROP FOREIGN KEY FK_8977B4466B899279');
        $this->addSql('ALTER TABLE dossier DROP FOREIGN KEY FK_3D48E037C54C8C93');
        $this->addSql('ALTER TABLE dossier DROP FOREIGN KEY FK_3D48E0376B899279');
        $this->addSql('ALTER TABLE examen_physique DROP FOREIGN KEY FK_A3594C51611C0C56');
        $this->addSql('ALTER TABLE identity DROP FOREIGN KEY FK_6A95E9C4611C0C56');
        $this->addSql('ALTER TABLE paraclinique DROP FOREIGN KEY FK_10677ADC611C0C56');
        $this->addSql('ALTER TABLE paraclinique_result DROP FOREIGN KEY FK_57889DC4DDBF29B8');
        $this->addSql('ALTER TABLE paraclinique_type DROP FOREIGN KEY FK_9E263A66E4D46CF3');
        $this->addSql('ALTER TABLE patient_doctor DROP FOREIGN KEY FK_148E1A9087F4FB17');
        $this->addSql('ALTER TABLE patient_doctor DROP FOREIGN KEY FK_148E1A906B899279');
        $this->addSql('ALTER TABLE patient_service DROP FOREIGN KEY FK_BCFECF39ED5CA9E6');
        $this->addSql('ALTER TABLE patient_service DROP FOREIGN KEY FK_BCFECF396B899279');
        $this->addSql('ALTER TABLE service_patient DROP FOREIGN KEY FK_D55E8577ED5CA9E6');
        $this->addSql('ALTER TABLE service_patient DROP FOREIGN KEY FK_D55E85776B899279');
        $this->addSql('DROP TABLE antecedents_familiaux');
        $this->addSql('DROP TABLE antecedents_personnels');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE diagno_and_pec');
        $this->addSql('DROP TABLE doctor');
        $this->addSql('DROP TABLE doctor_patient');
        $this->addSql('DROP TABLE dossier');
        $this->addSql('DROP TABLE examen_physique');
        $this->addSql('DROP TABLE identity');
        $this->addSql('DROP TABLE paraclinique');
        $this->addSql('DROP TABLE paraclinique_result');
        $this->addSql('DROP TABLE paraclinique_type');
        $this->addSql('DROP TABLE patient');
        $this->addSql('DROP TABLE patient_doctor');
        $this->addSql('DROP TABLE patient_service');
        $this->addSql('DROP TABLE service');
        $this->addSql('DROP TABLE service_patient');
        $this->addSql('DROP TABLE suivi');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE antecedents_familiaux (id INT AUTO_INCREMENT NOT NULL, dossier_id INT NOT NULL, pere_taille INT DEFAULT NULL, pere_age_puberte INT DEFAULT NULL, meretaille INT DEFAULT NULL, mere_age_puberte INT DEFAULT NULL, taille_cible INT DEFAULT NULL, taillefrere INT DEFAULT NULL, pathologie_familiale_caisc VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, diarrhee VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, vomissements VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, distension_abominale VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, constipation VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, rectorragies VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, douleur_abdominale VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, paleur VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, asthenie VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, anorexie VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, boulimie VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, syndrome_polyuro_polydipsique VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, cephalees VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, troubles_visuels VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, htic_vomissements VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, autre VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_EF8C547B611C0C56 (dossier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE antecedents_personnels (id INT AUTO_INCREMENT NOT NULL, dossier_id INT NOT NULL, consanguinite VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, grossesse VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, incidents VARCHAR(100) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, voie VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, haute VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, basse VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, incident VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, poids INT NOT NULL, taille INT NOT NULL, pc INT DEFAULT NULL, allaitement VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, diversification_alimentaire VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, dev_psychomoteur VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, pathologie_neonatale VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, pathologie_chronique VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, traitement VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, context_psycho_affectif VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_93006182611C0C56 (dossier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, type VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE diagno_and_pec (id INT AUTO_INCREMENT NOT NULL, dossier_id INT NOT NULL, diagnostic_retenu VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, pec_therapeutique VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_BF65B111611C0C56 (dossier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE doctor (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, service_id INT DEFAULT NULL, INDEX IDX_1FC0F36AA76ED395 (user_id), INDEX IDX_1FC0F36AED5CA9E6 (service_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE doctor_patient (doctor_id INT NOT NULL, patient_id INT NOT NULL, INDEX IDX_8977B44687F4FB17 (doctor_id), INDEX IDX_8977B4466B899279 (patient_id), PRIMARY KEY(doctor_id, patient_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE dossier (id INT AUTO_INCREMENT NOT NULL, type_id INT NOT NULL, patient_id INT NOT NULL, INDEX IDX_3D48E037C54C8C93 (type_id), INDEX IDX_3D48E0376B899279 (patient_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE examen_physique (id INT AUTO_INCREMENT NOT NULL, dossier_id INT DEFAULT NULL, taille INT DEFAULT NULL, imc INT DEFAULT NULL, pc INT DEFAULT NULL, flechissement VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, stagnation VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, bu VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, hippocratisme_digital VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, signes_dysmorphiques VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, syndrome_cushing VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, fente_labiale VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, fente_platine VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, incisive_centrale_unique VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, stade_pubertaire_tanner VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, micropenis VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, examen_thyroide VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, examen_cardio_vx VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, examen_pleuro_pulmonaire VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, examen_neurologique VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, autres VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_A3594C51611C0C56 (dossier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE identity (id INT AUTO_INCREMENT NOT NULL, dossier_id INT NOT NULL, fullname VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, day INT NOT NULL, month INT NOT NULL, year INT NOT NULL, sexe VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, city VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, ip VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, phone VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, couverture_sanitaire VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_6A95E9C4611C0C56 (dossier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE paraclinique (id INT AUTO_INCREMENT NOT NULL, dossier_id INT DEFAULT NULL, age_osseux VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, age_chronologique INT DEFAULT NULL, gb VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, plt VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, hb VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, vgm VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, tcmh VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ca VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ph VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, k VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, na VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, uree VARCHAR(100) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, creatininemie VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, vs VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, crp VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ferritinemie VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, iga_anti_transglutaminases VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, iga_totaux VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ac_anti_endomysium VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, biopie_jejunale VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ft4 VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, tsh VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, igf1 VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, oestradiol VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, testosterone VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, lh VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, fsh VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, caryotype_sanguin VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, autres VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_10677ADC611C0C56 (dossier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE paraclinique_result (id INT AUTO_INCREMENT NOT NULL, paraclinique_type_id INT NOT NULL, duree INT NOT NULL, gly_cap INT NOT NULL, gly_vein INT NOT NULL, gh INT NOT NULL, corti_sol INT NOT NULL, acth INT NOT NULL, INDEX IDX_57889DC4DDBF29B8 (paraclinique_type_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE paraclinique_type (id INT AUTO_INCREMENT NOT NULL, paraclinique_id INT NOT NULL, type VARCHAR(100) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL, INDEX IDX_9E263A66E4D46CF3 (paraclinique_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE patient (id INT AUTO_INCREMENT NOT NULL, fullname VARCHAR(100) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, jour INT NOT NULL, month INT NOT NULL, year INT NOT NULL, sexe VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, city VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, phone VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, ip VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE patient_doctor (patient_id INT NOT NULL, doctor_id INT NOT NULL, INDEX IDX_148E1A906B899279 (patient_id), INDEX IDX_148E1A9087F4FB17 (doctor_id), PRIMARY KEY(patient_id, doctor_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE patient_service (patient_id INT NOT NULL, service_id INT NOT NULL, INDEX IDX_BCFECF396B899279 (patient_id), INDEX IDX_BCFECF39ED5CA9E6 (service_id), PRIMARY KEY(patient_id, service_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE service (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(60) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE service_patient (service_id INT NOT NULL, patient_id INT NOT NULL, INDEX IDX_D55E8577ED5CA9E6 (service_id), INDEX IDX_D55E85776B899279 (patient_id), PRIMARY KEY(service_id, patient_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE suivi (id INT AUTO_INCREMENT NOT NULL, text VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE antecedents_familiaux ADD CONSTRAINT FK_EF8C547B611C0C56 FOREIGN KEY (dossier_id) REFERENCES dossier (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE antecedents_personnels ADD CONSTRAINT FK_93006182611C0C56 FOREIGN KEY (dossier_id) REFERENCES dossier (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE diagno_and_pec ADD CONSTRAINT FK_BF65B111611C0C56 FOREIGN KEY (dossier_id) REFERENCES dossier (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE doctor ADD CONSTRAINT FK_1FC0F36AED5CA9E6 FOREIGN KEY (service_id) REFERENCES service (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE doctor ADD CONSTRAINT FK_1FC0F36AA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE doctor_patient ADD CONSTRAINT FK_8977B44687F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE doctor_patient ADD CONSTRAINT FK_8977B4466B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE dossier ADD CONSTRAINT FK_3D48E037C54C8C93 FOREIGN KEY (type_id) REFERENCES category (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE dossier ADD CONSTRAINT FK_3D48E0376B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE examen_physique ADD CONSTRAINT FK_A3594C51611C0C56 FOREIGN KEY (dossier_id) REFERENCES dossier (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE identity ADD CONSTRAINT FK_6A95E9C4611C0C56 FOREIGN KEY (dossier_id) REFERENCES dossier (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE paraclinique ADD CONSTRAINT FK_10677ADC611C0C56 FOREIGN KEY (dossier_id) REFERENCES dossier (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE paraclinique_result ADD CONSTRAINT FK_57889DC4DDBF29B8 FOREIGN KEY (paraclinique_type_id) REFERENCES paraclinique_type (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE paraclinique_type ADD CONSTRAINT FK_9E263A66E4D46CF3 FOREIGN KEY (paraclinique_id) REFERENCES paraclinique (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE patient_doctor ADD CONSTRAINT FK_148E1A9087F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE patient_doctor ADD CONSTRAINT FK_148E1A906B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE patient_service ADD CONSTRAINT FK_BCFECF39ED5CA9E6 FOREIGN KEY (service_id) REFERENCES service (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE patient_service ADD CONSTRAINT FK_BCFECF396B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE service_patient ADD CONSTRAINT FK_D55E8577ED5CA9E6 FOREIGN KEY (service_id) REFERENCES service (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE service_patient ADD CONSTRAINT FK_D55E85776B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) ON UPDATE NO ACTION ON DELETE CASCADE');
    }
}
