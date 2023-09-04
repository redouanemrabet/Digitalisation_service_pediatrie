<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\AntiFamiliauxRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AntiFamiliauxRepository::class)]
#[ApiResource]
class AntiFamiliaux
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?int $TaillePere = null;

    #[ORM\Column(nullable: true)]
    private ?int $ageDePubertPere = null;

    #[ORM\Column(nullable: true)]
    private ?int $TailleMere = null;

    #[ORM\Column(nullable: true)]
    private ?int $ageDePubertMere = null;

    #[ORM\Column(nullable: true)]
    private ?int $TailleCible = null;

    #[ORM\Column(nullable: true)]
    private ?int $TailleFreres = null;

    #[ORM\Column(length: 100,nullable: true)]
    private ?string $PathologieFamiliale = null;

    #[ORM\Column(nullable: true)]
    private ?bool $diarrhee = null;

    #[ORM\Column(nullable: true)]
    private ?bool $vomissements = null;

    #[ORM\Column(nullable: true)]
    private ?bool $distensionAbominale = null;

    #[ORM\Column(nullable: true)]
    private ?bool $cephalees = null;

    #[ORM\Column(nullable: true)]
    private ?bool $troublesVisuels = null;

    #[ORM\Column(nullable: true)]
    private ?bool $vomissementsHTIC = null;

    #[ORM\Column(nullable: true)]
    private ?bool $constipation = null;

    #[ORM\Column(nullable: true)]
    private ?bool $rectorragies = null;

    #[ORM\Column(nullable: true)]
    private ?bool $douleurAbdominale = null;

    #[ORM\Column(nullable: true)]
    private ?bool $paleur = null;

    #[ORM\Column(nullable: true)]
    private ?bool $asthenie = null;

    #[ORM\Column(nullable: true)]
    private ?bool $anorexie = null;

    #[ORM\Column(nullable: true)]
    private ?bool $boulimie = null;

    #[ORM\Column(nullable: true)]
    private ?bool $syndromePolyuroPolydipsique = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $AutresFamiliaux = null;

    #[ORM\ManyToOne(inversedBy: 'antiFamiliauxes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Dossier $dossier = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTaillePere(): ?int
    {
        return $this->TaillePere;
    }

    public function setTaillePere(?int $TaillePere): self
    {
        $this->TaillePere = $TaillePere;

        return $this;
    }

    public function getAgeDePubertPere(): ?int
    {
        return $this->ageDePubertPere;
    }

    public function setAgeDePubertPere(?int $ageDePubertPere): self
    {
        $this->ageDePubertPere = $ageDePubertPere;

        return $this;
    }

    public function getTailleMere(): ?int
    {
        return $this->TailleMere;
    }

    public function setTailleMere(?int $TailleMere): self
    {
        $this->TailleMere = $TailleMere;

        return $this;
    }

    public function getAgeDePubertMere(): ?int
    {
        return $this->ageDePubertMere;
    }

    public function setAgeDePubertMere(?int $ageDePubertMere): self
    {
        $this->ageDePubertMere = $ageDePubertMere;

        return $this;
    }

    public function getTailleCible(): ?int
    {
        return $this->TailleCible;
    }

    public function setTailleCible(?int $TailleCible): self
    {
        $this->TailleCible = $TailleCible;

        return $this;
    }

    public function getTailleFreres(): ?int
    {
        return $this->TailleFreres;
    }

    public function setTailleFreres(?int $TailleFreres): self
    {
        $this->TailleFreres = $TailleFreres;

        return $this;
    }

    public function getPathologieFamiliale(): ?string
    {
        return $this->PathologieFamiliale;
    }

    public function setPathologieFamiliale(?string $PathologieFamiliale): self
    {
        $this->PathologieFamiliale = $PathologieFamiliale;

        return $this;
    }

    public function getDiarrhee(): ?bool
    {
        return $this->diarrhee;
    }

    public function setDiarrhee(?bool $diarrhee): self
    {
        $this->diarrhee = $diarrhee;

        return $this;
    }

    public function getVomissements(): ?bool
    {
        return $this->vomissements;
    }

    public function setVomissements(?bool $vomissements): self
    {
        $this->vomissements = $vomissements;

        return $this;
    }

    public function getDistensionAbominale(): ?bool
    {
        return $this->distensionAbominale;
    }

    public function setDistensionAbominale(?bool $distensionAbominale): self
    {
        $this->distensionAbominale = $distensionAbominale;

        return $this;
    }

    public function getCephalees(): ?bool
    {
        return $this->cephalees;
    }

    public function setCephalees(bool $cephalees): self
    {
        $this->cephalees = $cephalees;

        return $this;
    }

    public function getTroublesVisuels(): ?bool
    {
        return $this->troublesVisuels;
    }

    public function setTroublesVisuels(?bool $troublesVisuels): self
    {
        $this->troublesVisuels = $troublesVisuels;

        return $this;
    }

    public function getVomissementsHTIC(): ?bool
    {
        return $this->vomissementsHTIC;
    }

    public function setVomissementsHTIC(?bool $vomissementsHTIC): self
    {
        $this->vomissementsHTIC = $vomissementsHTIC;

        return $this;
    }

    public function getConstipation(): ?bool
    {
        return $this->constipation;
    }

    public function setConstipation(?bool $constipation): self
    {
        $this->constipation = $constipation;

        return $this;
    }

    public function getRectorragies(): ?bool
    {
        return $this->rectorragies;
    }

    public function setRectorragies(?bool $rectorragies): self
    {
        $this->rectorragies = $rectorragies;

        return $this;
    }

    public function getDouleurAbdominale(): ?bool
    {
        return $this->douleurAbdominale;
    }

    public function setDouleurAbdominale(?bool $douleurAbdominale): self
    {
        $this->douleurAbdominale = $douleurAbdominale;

        return $this;
    }

    public function getPaleur(): ?bool
    {
        return $this->paleur;
    }

    public function setPaleur(?bool $paleur): self
    {
        $this->paleur = $paleur;

        return $this;
    }

    public function getAsthenie(): ?bool
    {
        return $this->asthenie;
    }

    public function setAsthenie(?bool $asthenie): self
    {
        $this->asthenie = $asthenie;

        return $this;
    }

    public function getAnorexie(): ?bool
    {
        return $this->anorexie;
    }

    public function setAnorexie(?bool $anorexie): self
    {
        $this->anorexie = $anorexie;

        return $this;
    }

    public function getBoulimie(): ?bool
    {
        return $this->boulimie;
    }

    public function setBoulimie(?bool $boulimie): self
    {
        $this->boulimie = $boulimie;

        return $this;
    }

    public function getSyndromePolyuroPolydipsique(): ?bool
    {
        return $this->syndromePolyuroPolydipsique;
    }

    public function setSyndromePolyuroPolydipsique(?bool $syndromePolyuroPolydipsique): self
    {
        $this->syndromePolyuroPolydipsique = $syndromePolyuroPolydipsique;

        return $this;
    }

    public function getAutresFamiliaux(): ?string
    {
        return $this->AutresFamiliaux;
    }

    public function setAutresFamiliaux(?string $AutresFamiliaux): self
    {
        $this->AutresFamiliaux = $AutresFamiliaux;

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
}
