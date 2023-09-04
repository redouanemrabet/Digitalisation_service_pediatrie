<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ExamenPhysiqueRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ExamenPhysiqueRepository::class)]
#[ApiResource]
class ExamenPhysique
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?int $poids = null;

    #[ORM\Column(nullable: true)]
    private ?int $taille = null;

    #[ORM\Column(nullable: true)]
    private ?int $imc = null;

    #[ORM\Column(nullable: true)]
    private ?int $pc = null;

    #[ORM\Column(length: 100,nullable: true)]
    private ?string $bu = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $signesDysmorphiques = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $stadePubertaireTanner = null;

    #[ORM\Column( nullable: true)]
    private ?bool $fenteLabiale = null;

    #[ORM\Column(nullable: true)]
    private ?bool $fentePalatine = null;

    #[ORM\Column(nullable: true)]
    private ?bool $incisiveCentraleUnique = null;

    #[ORM\Column(nullable: true)]
    private ?bool $flechissement = null;

    #[ORM\Column(nullable: true)]
    private ?bool $stagnation = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $hippocratismeDigital = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $syndromeCushing = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $micropenis = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $examenThyroide = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $examenCardioVx = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $examenPleuroPulmonaire = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $examenNeurologique = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $autresExamenPhysique = null;

    #[ORM\ManyToOne(inversedBy: 'examenPhysiques')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Dossier $dossier = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPoids(): ?int
    {
        return $this->poids;
    }

    public function setPoids(?int $poids): self
    {
        $this->poids = $poids;

        return $this;
    }

    public function getTaille(): ?int
    {
        return $this->taille;
    }

    public function setTaille(?int $taille): self
    {
        $this->taille = $taille;

        return $this;
    }

    public function getImc(): ?int
    {
        return $this->imc;
    }

    public function setImc(?int $imc): self
    {
        $this->imc = $imc;

        return $this;
    }

    public function getPc(): ?int
    {
        return $this->pc;
    }

    public function setPc(?int $pc): self
    {
        $this->pc = $pc;

        return $this;
    }

    public function getBu(): ?string
    {
        return $this->bu;
    }

    public function setBu(?string $bu): self
    {
        $this->bu = $bu;

        return $this;
    }

    public function getSignesDysmorphiques(): ?string
    {
        return $this->signesDysmorphiques;
    }

    public function setSignesDysmorphiques(?string $signesDysmorphiques): self
    {
        $this->signesDysmorphiques = $signesDysmorphiques;

        return $this;
    }

    public function getStadePubertaireTanner(): ?string
    {
        return $this->stadePubertaireTanner;
    }

    public function setStadePubertaireTanner(?string $stadePubertaireTanner): self
    {
        $this->stadePubertaireTanner = $stadePubertaireTanner;

        return $this;
    }

    public function getFenteLabiale(): ?bool
    {
        return $this->fenteLabiale;
    }

    public function setFenteLabiale(?bool $fenteLabiale): self
    {
        $this->fenteLabiale = $fenteLabiale;

        return $this;
    }

    public function isFentePalatine(): ?bool
    {
        return $this->fentePalatine;
    }

    public function setFentePalatine(?bool $fentePalatine): self
    {
        $this->fentePalatine = $fentePalatine;

        return $this;
    }

    public function isIncisiveCentraleUnique(): ?bool
    {
        return $this->incisiveCentraleUnique;
    }

    public function setIncisiveCentraleUnique(?bool $incisiveCentraleUnique): self
    {
        $this->incisiveCentraleUnique = $incisiveCentraleUnique;

        return $this;
    }

    public function isFlechissement(): ?bool
    {
        return $this->flechissement;
    }

    public function setFlechissement(?bool $flechissement): self
    {
        $this->flechissement = $flechissement;

        return $this;
    }

    public function isStagnation(): ?bool
    {
        return $this->stagnation;
    }

    public function setStagnation(?bool $stagnation): self
    {
        $this->stagnation = $stagnation;

        return $this;
    }

    public function getHippocratismeDigital(): ?string
    {
        return $this->hippocratismeDigital;
    }

    public function setHippocratismeDigital(?string $hippocratismeDigital): self
    {
        $this->hippocratismeDigital = $hippocratismeDigital;

        return $this;
    }

    public function getSyndromeCushing(): ?string
    {
        return $this->syndromeCushing;
    }

    public function setSyndromeCushing(?string $syndromeCushing): self
    {
        $this->syndromeCushing = $syndromeCushing;

        return $this;
    }

    public function getMicropenis(): ?string
    {
        return $this->micropenis;
    }

    public function setMicropenis(?string $micropenis): self
    {
        $this->micropenis = $micropenis;

        return $this;
    }

    public function getExamenThyroide(): ?string
    {
        return $this->examenThyroide;
    }

    public function setExamenThyroide(?string $examenThyroide): self
    {
        $this->examenThyroide = $examenThyroide;

        return $this;
    }

    public function getExamenCardioVx(): ?string
    {
        return $this->examenCardioVx;
    }

    public function setExamenCardioVx(?string $examenCardioVx): self
    {
        $this->examenCardioVx = $examenCardioVx;

        return $this;
    }

    public function getExamenPleuroPulmonaire(): ?string
    {
        return $this->examenPleuroPulmonaire;
    }

    public function setExamenPleuroPulmonaire(?string $examenPleuroPulmonaire): self
    {
        $this->examenPleuroPulmonaire = $examenPleuroPulmonaire;

        return $this;
    }

    public function getExamenNeurologique(): ?string
    {
        return $this->examenNeurologique;
    }

    public function setExamenNeurologique(?string $examenNeurologique): self
    {
        $this->examenNeurologique = $examenNeurologique;

        return $this;
    }

    public function getAutresExamenPhysique(): ?string
    {
        return $this->autresExamenPhysique;
    }

    public function setAutresExamenPhysique(?string $autresExamenPhysique): self
    {
        $this->autresExamenPhysique = $autresExamenPhysique;

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
