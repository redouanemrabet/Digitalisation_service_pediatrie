<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\AntiPersonnelRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AntiPersonnelRepository::class)]
#[ApiResource]
class AntiPersonnel
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $Consanguinite = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $Grossesse = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $AccouchementVoie = null;

    #[ORM\ManyToOne(inversedBy: 'antiPersonnels')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Dossier $dossier = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $Incidents = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $Incident = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $Terme = null;

    #[ORM\Column(nullable: true)]
    private ?int $Poids = null;

    #[ORM\Column(nullable: true)]
    private ?int $Taille = null;

    #[ORM\Column(nullable: true)]
    private ?int $PC = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $Allaitement = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $DeveloppementPsychomoteur = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $PathologieChronique = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $DiversificationAlimentaire = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $ContextePsychoAffectif = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $Traitement = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $PathologieNeonatale = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getConsanguinite(): ?string
    {
        return $this->Consanguinite;
    }

    public function setConsanguinite(?string $Consanguinite): self
    {
        $this->Consanguinite = $Consanguinite;

        return $this;
    }

    public function getGrossesse(): ?string
    {
        return $this->Grossesse;
    }

    public function setGrossesse(?string $Grossesse): self
    {
        $this->Grossesse = $Grossesse;

        return $this;
    }

    public function getAccouchementVoie(): ?string
    {
        return $this->AccouchementVoie;
    }

    public function setAccouchementVoie(?string $AccouchementVoie): self
    {
        $this->AccouchementVoie = $AccouchementVoie;

        return $this;
    }

    public function getDossier(): ?Dossier
    {
        return $this->dossier;
    }

    public function setDossier(?Dossier $dossier): self
    {
        $this->dossier = $dossier;

        return $this;
    }

    public function getIncidents(): ?string
    {
        return $this->Incidents;
    }

    public function setIncidents(?string $Incidents): self
    {
        $this->Incidents = $Incidents;

        return $this;
    }

    public function getIncident(): ?string
    {
        return $this->Incident;
    }

    public function setIncident(?string $Incident): self
    {
        $this->Incident = $Incident;

        return $this;
    }

    public function getTerme(): ?string
    {
        return $this->Terme;
    }

    public function setTerme(?string $Terme): self
    {
        $this->Terme = $Terme;

        return $this;
    }

    public function getPoids(): ?int
    {
        return $this->Poids;
    }

    public function setPoids(?int $Poids): self
    {
        $this->Poids = $Poids;

        return $this;
    }

    public function getTaille(): ?int
    {
        return $this->Taille;
    }

    public function setTaille(?int $Taille): self
    {
        $this->Taille = $Taille;

        return $this;
    }

    public function getPC(): ?int
    {
        return $this->PC;
    }

    public function setPC(?int $PC): self
    {
        $this->PC = $PC;

        return $this;
    }

    public function getAllaitement(): ?string
    {
        return $this->Allaitement;
    }

    public function setAllaitement(?string $Allaitement): self
    {
        $this->Allaitement = $Allaitement;

        return $this;
    }

    public function getDeveloppementPsychomoteur(): ?string
    {
        return $this->DeveloppementPsychomoteur;
    }

    public function setDeveloppementPsychomoteur(?string $DeveloppementPsychomoteur): self
    {
        $this->DeveloppementPsychomoteur = $DeveloppementPsychomoteur;

        return $this;
    }

    public function getPathologieChronique(): ?string
    {
        return $this->PathologieChronique;
    }

    public function setPathologieChronique(?string $PathologieChronique): self
    {
        $this->PathologieChronique = $PathologieChronique;

        return $this;
    }

    public function getDiversificationAlimentaire(): ?string
    {
        return $this->DiversificationAlimentaire;
    }

    public function setDiversificationAlimentaire(?string $DiversificationAlimentaire): self
    {
        $this->DiversificationAlimentaire = $DiversificationAlimentaire;

        return $this;
    }

    public function getContextePsychoAffectif(): ?string
    {
        return $this->ContextePsychoAffectif;
    }

    public function setContextePsychoAffectif(?string $ContextePsychoAffectif): self
    {
        $this->ContextePsychoAffectif = $ContextePsychoAffectif;

        return $this;
    }

    public function getTraitement(): ?string
    {
        return $this->Traitement;
    }

    public function setTraitement(?string $Traitement): self
    {
        $this->Traitement = $Traitement;

        return $this;
    }

    public function getPathologieNeonatale(): ?string
    {
        return $this->PathologieNeonatale;
    }

    public function setPathologieNeonatale(?string $PathologieNeonatale): self
    {
        $this->PathologieNeonatale = $PathologieNeonatale;

        return $this;
    }
}
