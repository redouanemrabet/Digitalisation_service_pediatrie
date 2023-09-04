<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\PatientRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: PatientRepository::class)]
#[ApiResource]
/**
 * @UniqueEntity("ip", message="Cette IP est déjà utilisée par un autre patient.")
 */
class Patient
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $fullname = null;

    #[ORM\Column]
    /**
     * @Assert\NotBlank(message="L'IP est obligatoire.")
     */
    private ?int $ip = null;

    #[ORM\Column(length: 255)]
    private ?string $ville = null;

    #[ORM\Column]
    private ?int $jour = null;

    #[ORM\Column]
    private ?int $mois = null;

    #[ORM\Column]
    private ?int $annee = null;

    #[ORM\Column(length: 255)]
    private ?string $sexe = null;

    #[ORM\Column(length: 255)]
    private ?string $telephone = null;

    #[ORM\OneToMany(mappedBy: 'patient', targetEntity: Dossier::class)]
    private Collection $dossiers;

    #[ORM\Column(length: 150, nullable: true)]
    private ?string $convertureSanitaire = null;

    public function __construct()
    {
        $this->dossiers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFullname(): ?string
    {
        return $this->fullname;
    }

    public function setFullname(string $fullname): self
    {
        $this->fullname = $fullname;

        return $this;
    }

    public function getIp(): ?int
    {
        return $this->ip;
    }

    public function setIp(int $ip): self
    {
        $this->ip = $ip;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

    public function getJour(): ?int
    {
        return $this->jour;
    }

    public function setJour(int $jour): self
    {
        $this->jour = $jour;

        return $this;
    }

    public function getMois(): ?int
    {
        return $this->mois;
    }

    public function setMois(int $mois): self
    {
        $this->mois = $mois;

        return $this;
    }

    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    public function setAnnee(int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getSexe(): ?string
    {
        return $this->sexe;
    }

    public function setSexe(string $sexe): self
    {
        $this->sexe = $sexe;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    /**
     * @return Collection<int, Dossier>
     */
    public function getDossiers(): Collection
    {
        return $this->dossiers;
    }

    public function addDossier(Dossier $dossier): self
    {
        if (!$this->dossiers->contains($dossier)) {
            $this->dossiers->add($dossier);
            $dossier->setPatient($this);
        }

        return $this;
    }

    public function removeDossier(Dossier $dossier): self
    {
        if ($this->dossiers->removeElement($dossier)) {
            // set the owning side to null (unless already changed)
            if ($dossier->getPatient() === $this) {
                $dossier->setPatient(null);
            }
        }

        return $this;
    }

    public function getConvertureSanitaire(): ?string
    {
        return $this->convertureSanitaire;
    }

    public function setConvertureSanitaire(?string $convertureSanitaire): self
    {
        $this->convertureSanitaire = $convertureSanitaire;

        return $this;
    }
}
