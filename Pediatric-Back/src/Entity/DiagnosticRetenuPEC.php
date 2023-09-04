<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\DiagnosticRetenuPECRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DiagnosticRetenuPECRepository::class)]
#[ApiResource]
class DiagnosticRetenuPEC
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $diagnosticRetenu = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $PECTerapeutique = null;

    #[ORM\ManyToOne(inversedBy: 'diagnosticRetenuPECs')]
    #[ORM\JoinColumn(nullable: false)]
    private ?dossier $dossier = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDiagnosticRetenu(): ?string
    {
        return $this->diagnosticRetenu;
    }

    public function setDiagnosticRetenu(?string $diagnosticRetenu): self
    {
        $this->diagnosticRetenu = $diagnosticRetenu;

        return $this;
    }

    public function getPECTerapeutique(): ?string
    {
        return $this->PECTerapeutique;
    }

    public function setPECTerapeutique(?string $PECTerapeutique): self
    {
        $this->PECTerapeutique = $PECTerapeutique;

        return $this;
    }

    public function getDossier(): ?dossier
    {
        return $this->dossier;
    }

    public function setDossier(?dossier $dossier): self
    {
        $this->dossier = $dossier;

        return $this;
    }
}
