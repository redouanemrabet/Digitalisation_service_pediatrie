<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\DossierRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DossierRepository::class)]
#[ApiResource]
class Dossier
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'dossiers')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Category $type = null;

    #[ORM\ManyToOne(inversedBy: 'dossiers')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Patient $patient = null;



    #[ORM\OneToMany(mappedBy: 'dossier', targetEntity: AntiFamiliaux::class)]
    private Collection $antiFamiliauxes;

    #[ORM\OneToMany(mappedBy: 'dossier', targetEntity: DiagnosticRetenuPEC::class)]
    private Collection $diagnosticRetenuPECs;

    #[ORM\OneToMany(mappedBy: 'dossier', targetEntity: ExamenPhysique::class)]
    private Collection $examenPhysiques;

    #[ORM\OneToMany(mappedBy: 'dossier', targetEntity: Suivi::class)]
    private Collection $suivis;

    #[ORM\OneToMany(mappedBy: 'dossier', targetEntity: AntiPersonnel::class)]
    private Collection $antiPersonnels;

    #[ORM\OneToMany(mappedBy: 'dossier', targetEntity: Paraclinique::class)]
    private Collection $paracliniques;

    #[ORM\OneToMany(mappedBy: 'dossier', targetEntity: Document::class)]
    private Collection $documents;

    #[ORM\OneToMany(mappedBy: 'dossier', targetEntity: Courbe::class)]
    private Collection $courbes;

    public function __construct()
    {

        $this->antiFamiliauxes = new ArrayCollection();
        $this->diagnosticRetenuPECs = new ArrayCollection();
        $this->examenPhysiques = new ArrayCollection();
        $this->suivis = new ArrayCollection();
        $this->antiPersonnels = new ArrayCollection();
        $this->paracliniques = new ArrayCollection();
        $this->documents = new ArrayCollection();
        $this->courbes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): ?Category
    {
        return $this->type;
    }

    public function setType(?Category $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getPatient(): ?Patient
    {
        return $this->patient;
    }

    public function setPatient(?Patient $patient): self
    {
        $this->patient = $patient;

        return $this;
    }



    /**
     * @return Collection<int, AntiFamiliaux>
     */
    public function getAntiFamiliauxes(): Collection
    {
        return $this->antiFamiliauxes;
    }

    public function addAntiFamiliaux(AntiFamiliaux $antiFamiliaux): self
    {
        if (!$this->antiFamiliauxes->contains($antiFamiliaux)) {
            $this->antiFamiliauxes->add($antiFamiliaux);
            $antiFamiliaux->setDossier($this);
        }

        return $this;
    }

    public function removeAntiFamiliaux(AntiFamiliaux $antiFamiliaux): self
    {
        if ($this->antiFamiliauxes->removeElement($antiFamiliaux)) {
            // set the owning side to null (unless already changed)
            if ($antiFamiliaux->getDossier() === $this) {
                $antiFamiliaux->setDossier(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, DiagnosticRetenuPEC>
     */
    public function getDiagnosticRetenuPECs(): Collection
    {
        return $this->diagnosticRetenuPECs;
    }

    public function addDiagnosticRetenuPEC(DiagnosticRetenuPEC $diagnosticRetenuPEC): self
    {
        if (!$this->diagnosticRetenuPECs->contains($diagnosticRetenuPEC)) {
            $this->diagnosticRetenuPECs->add($diagnosticRetenuPEC);
            $diagnosticRetenuPEC->setDossier($this);
        }

        return $this;
    }

    public function removeDiagnosticRetenuPEC(DiagnosticRetenuPEC $diagnosticRetenuPEC): self
    {
        if ($this->diagnosticRetenuPECs->removeElement($diagnosticRetenuPEC)) {
            // set the owning side to null (unless already changed)
            if ($diagnosticRetenuPEC->getDossier() === $this) {
                $diagnosticRetenuPEC->setDossier(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ExamenPhysique>
     */
    public function getExamenPhysiques(): Collection
    {
        return $this->examenPhysiques;
    }

    public function addExamenPhysique(ExamenPhysique $examenPhysique): self
    {
        if (!$this->examenPhysiques->contains($examenPhysique)) {
            $this->examenPhysiques->add($examenPhysique);
            $examenPhysique->setDossier($this);
        }

        return $this;
    }

    public function removeExamenPhysique(ExamenPhysique $examenPhysique): self
    {
        if ($this->examenPhysiques->removeElement($examenPhysique)) {
            // set the owning side to null (unless already changed)
            if ($examenPhysique->getDossier() === $this) {
                $examenPhysique->setDossier(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Suivi>
     */
    public function getSuivis(): Collection
    {
        return $this->suivis;
    }

    public function addSuivi(Suivi $suivi): self
    {
        if (!$this->suivis->contains($suivi)) {
            $this->suivis->add($suivi);
            $suivi->setDossier($this);
        }

        return $this;
    }

    public function removeSuivi(Suivi $suivi): self
    {
        if ($this->suivis->removeElement($suivi)) {
            // set the owning side to null (unless already changed)
            if ($suivi->getDossier() === $this) {
                $suivi->setDossier(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, AntiPersonnel>
     */
    public function getAntiPersonnels(): Collection
    {
        return $this->antiPersonnels;
    }

    public function addAntiPersonnel(AntiPersonnel $antiPersonnel): self
    {
        if (!$this->antiPersonnels->contains($antiPersonnel)) {
            $this->antiPersonnels->add($antiPersonnel);
            $antiPersonnel->setDossier($this);
        }

        return $this;
    }

    public function removeAntiPersonnel(AntiPersonnel $antiPersonnel): self
    {
        if ($this->antiPersonnels->removeElement($antiPersonnel)) {
            // set the owning side to null (unless already changed)
            if ($antiPersonnel->getDossier() === $this) {
                $antiPersonnel->setDossier(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Paraclinique>
     */
    public function getParacliniques(): Collection
    {
        return $this->paracliniques;
    }

    public function addParaclinique(Paraclinique $paraclinique): self
    {
        if (!$this->paracliniques->contains($paraclinique)) {
            $this->paracliniques->add($paraclinique);
            $paraclinique->setDossier($this);
        }

        return $this;
    }

    public function removeParaclinique(Paraclinique $paraclinique): self
    {
        if ($this->paracliniques->removeElement($paraclinique)) {
            // set the owning side to null (unless already changed)
            if ($paraclinique->getDossier() === $this) {
                $paraclinique->setDossier(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Document>
     */
    public function getDocuments(): Collection
    {
        return $this->documents;
    }

    public function addDocument(Document $document): self
    {
        if (!$this->documents->contains($document)) {
            $this->documents->add($document);
            $document->setDossier($this);
        }

        return $this;
    }

    public function removeDocument(Document $document): self
    {
        if ($this->documents->removeElement($document)) {
            // set the owning side to null (unless already changed)
            if ($document->getDossier() === $this) {
                $document->setDossier(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Courbe>
     */
    public function getCourbes(): Collection
    {
        return $this->courbes;
    }

    public function addCourbe(Courbe $courbe): self
    {
        if (!$this->courbes->contains($courbe)) {
            $this->courbes->add($courbe);
            $courbe->setDossier($this);
        }

        return $this;
    }

    public function removeCourbe(Courbe $courbe): self
    {
        if ($this->courbes->removeElement($courbe)) {
            // set the owning side to null (unless already changed)
            if ($courbe->getDossier() === $this) {
                $courbe->setDossier(null);
            }
        }

        return $this;
    }
}
