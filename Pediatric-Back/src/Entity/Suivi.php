<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\SuiviRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SuiviRepository::class)]
#[ApiResource]
class Suivi
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Suivi = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $Date = null;

    #[ORM\ManyToOne(inversedBy: 'suivis')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Dossier $dossier = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSuivi(): ?string
    {
        return $this->Suivi;
    }

    public function setSuivi(?string $Suivi): self
    {
        $this->Suivi = $Suivi;

        return $this;
    }

    public function getDate(): ?string
    {
        return $this->Date;
    }

    public function setDate(?string $Date): self
    {
        $this->Date = $Date;

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
