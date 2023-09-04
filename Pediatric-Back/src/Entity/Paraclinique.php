<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ParacliniqueRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ParacliniqueRepository::class)]
#[ApiResource]
class Paraclinique
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?int $AgeOsseux = null;

    #[ORM\Column(nullable: true)]
    private ?int $AgeChronologique = null;

    #[ORM\Column(nullable: true)]
    private ?int $GB = null;

    #[ORM\Column(nullable: true)]
    private ?int $PLT = null;

    #[ORM\Column(nullable: true)]
    private ?int $Hb = null;

    #[ORM\Column(nullable: true)]
    private ?int $VGM = null;

    #[ORM\Column(nullable: true)]
    private ?int $TCMH = null;

    #[ORM\Column(nullable: true)]
    private ?int $Ca = null;

    #[ORM\Column(nullable: true)]
    private ?int $Ph = null;

    #[ORM\Column(nullable: true)]
    private ?int $K = null;

    #[ORM\Column(nullable: true)]
    private ?int $Na = null;

    #[ORM\Column(nullable: true)]
    private ?int $Oestradiol = null;

    #[ORM\Column(nullable: true)]
    private ?int $Testosterone = null;

    #[ORM\Column(nullable: true)]
    private ?int $LH = null;

    #[ORM\Column(nullable: true)]
    private ?int $FSH = null;

    #[ORM\Column(nullable: true)]
    private ?int $ferritinemie = null;

    #[ORM\Column(nullable: true)]
    private ?int $IgAAntiTransglutaminases = null;

    #[ORM\Column(nullable: true)]
    private ?int $IgATotaux = null;

    #[ORM\Column(nullable: true)]
    private ?int $AcAntiEndomysium = null;

    #[ORM\Column(nullable: true)]
    private ?int $BiopcieJejunale = null;

    #[ORM\Column(nullable: true)]
    private ?int $FT4 = null;

    #[ORM\Column(nullable: true)]
    private ?int $TSH = null;

    #[ORM\Column(nullable: true)]
    private ?int $IGF_1 = null;

    #[ORM\Column(nullable: true)]
    private ?int $TestsStimulationHormoneCroissance = null;

    #[ORM\Column(length: 100,nullable: true)]
    private ?string $CaryotypeSanguin = null;

    #[ORM\Column(nullable: true)]
    private ?int $Uree = null;

    #[ORM\Column(nullable: true)]
    private ?int $Creatininemie = null;

    #[ORM\Column(nullable: true)]
    private ?int $VS = null;

    #[ORM\Column(nullable: true)]
    private ?int $CRP = null;

    #[ORM\Column(length: 100,nullable: true)]
    private ?string $AutresFamiliaux = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineJJ = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineMM = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineAA = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGLYCAP0 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGLYCAP15 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGLYCAP30 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGLYCAP45 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGLYCAP60 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGLYCAP90 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGLYCAP120 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGLYVEIN0 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGLYVEIN15 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGLYVEIN30 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGLYVEIN45 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGLYVEIN60 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGLYVEIN90 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGLYVEIN120 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGH0 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGH15 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGH30 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGH45 = null;



    #[ORM\Column(nullable: true)]
    private ?int $InsulineGH60 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGH90 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineGH120 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineCORTISOL0 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineCORTISOL15 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineCORTISOL30 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineCORTISOL45 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineCORTISOL60 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineCORTISOL90 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineCORTISOL120 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineACTH0 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineACTH15 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineACTH30 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineACTH45 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineACTH60 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineACTH90 = null;

    #[ORM\Column(nullable: true)]
    private ?int $InsulineACTH120 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGLYCAP0 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGLYCAP15 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGLYCAP30 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGLYCAP45 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGLYCAP60 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGLYCAP90 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGLYCAP120 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGLYVEIN0 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGLYVEIN15 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGLYVEIN30 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGLYVEIN45 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGLYVEIN60 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGLYVEIN90 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGLYVEIN120 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGH0 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGH15 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGH30 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGH45 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGH60 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGH90 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaGH120 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaCORTISOL0 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaCORTISOL15 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaCORTISOL30 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaCORTISOL45 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaCORTISOL60 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaCORTISOL90 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaCORTISOL120 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaACTH0 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaACTH15 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaACTH30 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaACTH45 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaACTH60 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaACTH90 = null;

    #[ORM\Column(nullable: true)]
    private ?int $LDopaACTH120 = null;

    #[ORM\Column(nullable: true)]
    private ?int $telephone = null;

    #[ORM\ManyToOne(inversedBy: 'paracliniques')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Dossier $dossier = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAgeOsseux(): ?int
    {
        return $this->AgeOsseux;
    }

    public function setAgeOsseux(?int $AgeOsseux): self
    {
        $this->AgeOsseux = $AgeOsseux;

        return $this;
    }

    public function getAgeChronologique(): ?int
    {
        return $this->AgeChronologique;
    }

    public function setAgeChronologique(?int $AgeChronologique): self
    {
        $this->AgeChronologique = $AgeChronologique;

        return $this;
    }

    public function getGB(): ?int
    {
        return $this->GB;
    }

    public function setGB(?int $GB): self
    {
        $this->GB = $GB;

        return $this;
    }

    public function getPLT(): ?int
    {
        return $this->PLT;
    }

    public function setPLT(?int $PLT): self
    {
        $this->PLT = $PLT;

        return $this;
    }

    public function getHb(): ?int
    {
        return $this->Hb;
    }

    public function setHb(?int $Hb): self
    {
        $this->Hb = $Hb;

        return $this;
    }

    public function getVGM(): ?int
    {
        return $this->VGM;
    }

    public function setVGM(?int $VGM): self
    {
        $this->VGM = $VGM;

        return $this;
    }

    public function getTCMH(): ?int
    {
        return $this->TCMH;
    }

    public function setTCMH(?int $TCMH): self
    {
        $this->TCMH = $TCMH;

        return $this;
    }

    public function getCa(): ?int
    {
        return $this->Ca;
    }

    public function setCa(?int $Ca): self
    {
        $this->Ca = $Ca;

        return $this;
    }

    public function getPh(): ?int
    {
        return $this->Ph;
    }

    public function setPh(?int $Ph): self
    {
        $this->Ph = $Ph;

        return $this;
    }

    public function getK(): ?int
    {
        return $this->K;
    }

    public function setK(?int $K): self
    {
        $this->K = $K;

        return $this;
    }

    public function getNa(): ?int
    {
        return $this->Na;
    }

    public function setNa(?int $Na): self
    {
        $this->Na = $Na;

        return $this;
    }

    public function getOestradiol(): ?int
    {
        return $this->Oestradiol;
    }

    public function setOestradiol(?int $Oestradiol): self
    {
        $this->Oestradiol = $Oestradiol;

        return $this;
    }

    public function getTestosterone(): ?int
    {
        return $this->Testosterone;
    }

    public function setTestosterone(?int $Testosterone): self
    {
        $this->Testosterone = $Testosterone;

        return $this;
    }

    public function getLH(): ?int
    {
        return $this->LH;
    }

    public function setLH(?int $LH): self
    {
        $this->LH = $LH;

        return $this;
    }

    public function getFSH(): ?int
    {
        return $this->FSH;
    }

    public function setFSH(?int $FSH): self
    {
        $this->FSH = $FSH;

        return $this;
    }

    public function getFerritinemie(): ?int
    {
        return $this->ferritinemie;
    }

    public function setFerritinemie(?int $ferritinemie): self
    {
        $this->ferritinemie = $ferritinemie;

        return $this;
    }

    public function getIgAAntiTransglutaminases(): ?int
    {
        return $this->IgAAntiTransglutaminases;
    }

    public function setIgAAntiTransglutaminases(?int $IgAAntiTransglutaminases): self
    {
        $this->IgAAntiTransglutaminases = $IgAAntiTransglutaminases;

        return $this;
    }

    public function getIgATotaux(): ?int
    {
        return $this->IgATotaux;
    }

    public function setIgATotaux(?int $IgATotaux): self
    {
        $this->IgATotaux = $IgATotaux;

        return $this;
    }

    public function getAcAntiEndomysium(): ?int
    {
        return $this->AcAntiEndomysium;
    }

    public function setAcAntiEndomysium(?int $AcAntiEndomysium): self
    {
        $this->AcAntiEndomysium = $AcAntiEndomysium;

        return $this;
    }

    public function getBiopcieJejunale(): ?int
    {
        return $this->BiopcieJejunale;
    }

    public function setBiopcieJejunale(?int $BiopcieJejunale): self
    {
        $this->BiopcieJejunale = $BiopcieJejunale;

        return $this;
    }

    public function getFT4(): ?int
    {
        return $this->FT4;
    }

    public function setFT4(?int $FT4): self
    {
        $this->FT4 = $FT4;

        return $this;
    }

    public function getTSH(): ?int
    {
        return $this->TSH;
    }

    public function setTSH(?int $TSH): self
    {
        $this->TSH = $TSH;

        return $this;
    }

    public function getIGF1(): ?int
    {
        return $this->IGF_1;
    }

    public function setIGF1(?int $IGF_1): self
    {
        $this->IGF_1 = $IGF_1;

        return $this;
    }

    public function getTestsStimulationHormoneCroissance(): ?int
    {
        return $this->TestsStimulationHormoneCroissance;
    }

    public function setTestsStimulationHormoneCroissance(?int $TestsStimulationHormoneCroissance): self
    {
        $this->TestsStimulationHormoneCroissance = $TestsStimulationHormoneCroissance;

        return $this;
    }

    public function getCaryotypeSanguin(): ?string
    {
        return $this->CaryotypeSanguin;
    }

    public function setCaryotypeSanguin(?string $CaryotypeSanguin): self
    {
        $this->CaryotypeSanguin = $CaryotypeSanguin;

        return $this;
    }

    public function getUree(): ?int
    {
        return $this->Uree;
    }

    public function setUree(?int $Uree): self
    {
        $this->Uree = $Uree;

        return $this;
    }

    public function getCreatininemie(): ?int
    {
        return $this->Creatininemie;
    }

    public function setCreatininemie(?int $Creatininemie): self
    {
        $this->Creatininemie = $Creatininemie;

        return $this;
    }

    public function getVS(): ?int
    {
        return $this->VS;
    }

    public function setVS(?int $VS): self
    {
        $this->VS = $VS;

        return $this;
    }

    public function getCRP(): ?int
    {
        return $this->CRP;
    }

    public function setCRP(?int $CRP): self
    {
        $this->CRP = $CRP;

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

    public function getInsulineJJ(): ?int
    {
        return $this->InsulineJJ;
    }

    public function setInsulineJJ(?int $InsulineJJ): self
    {
        $this->InsulineJJ = $InsulineJJ;

        return $this;
    }

    public function getInsulineMM(): ?int
    {
        return $this->InsulineMM;
    }

    public function setInsulineMM(?int $InsulineMM): self
    {
        $this->InsulineMM = $InsulineMM;

        return $this;
    }

    public function getInsulineAA(): ?int
    {
        return $this->InsulineAA;
    }

    public function setInsulineAA(?int $InsulineAA): self
    {
        $this->InsulineAA = $InsulineAA;

        return $this;
    }

    public function getInsulineGLYCAP0(): ?int
    {
        return $this->InsulineGLYCAP0;
    }

    public function setInsulineGLYCAP0(?int $InsulineGLYCAP0): self
    {
        $this->InsulineGLYCAP0 = $InsulineGLYCAP0;

        return $this;
    }

    public function getInsulineGLYCAP15(): ?int
    {
        return $this->InsulineGLYCAP15;
    }

    public function setInsulineGLYCAP15(?int $InsulineGLYCAP15): self
    {
        $this->InsulineGLYCAP15 = $InsulineGLYCAP15;

        return $this;
    }

    public function getInsulineGLYCAP30(): ?int
    {
        return $this->InsulineGLYCAP30;
    }

    public function setInsulineGLYCAP30(?int $InsulineGLYCAP30): self
    {
        $this->InsulineGLYCAP30 = $InsulineGLYCAP30;

        return $this;
    }

    public function getInsulineGLYCAP45(): ?int
    {
        return $this->InsulineGLYCAP45;
    }

    public function setInsulineGLYCAP45(?int $InsulineGLYCAP45): self
    {
        $this->InsulineGLYCAP45 = $InsulineGLYCAP45;

        return $this;
    }

    public function getInsulineGLYCAP60(): ?int
    {
        return $this->InsulineGLYCAP60;
    }

    public function setInsulineGLYCAP60(?int $InsulineGLYCAP60): self
    {
        $this->InsulineGLYCAP60 = $InsulineGLYCAP60;

        return $this;
    }

    public function getInsulineGLYCAP90(): ?int
    {
        return $this->InsulineGLYCAP90;
    }

    public function setInsulineGLYCAP90(?int $InsulineGLYCAP90): self
    {
        $this->InsulineGLYCAP90 = $InsulineGLYCAP90;

        return $this;
    }

    public function getInsulineGLYCAP120(): ?int
    {
        return $this->InsulineGLYCAP120;
    }

    public function setInsulineGLYCAP120(?int $InsulineGLYCAP120): self
    {
        $this->InsulineGLYCAP120 = $InsulineGLYCAP120;

        return $this;
    }

    public function getInsulineGLYVEIN0(): ?int
    {
        return $this->InsulineGLYVEIN0;
    }

    public function setInsulineGLYVEIN0(?int $InsulineGLYVEIN0): self
    {
        $this->InsulineGLYVEIN0 = $InsulineGLYVEIN0;

        return $this;
    }

    public function getInsulineGLYVEIN15(): ?int
    {
        return $this->InsulineGLYVEIN15;
    }

    public function setInsulineGLYVEIN15(?int $InsulineGLYVEIN15): self
    {
        $this->InsulineGLYVEIN15 = $InsulineGLYVEIN15;

        return $this;
    }

    public function getInsulineGLYVEIN30(): ?int
    {
        return $this->InsulineGLYVEIN30;
    }

    public function setInsulineGLYVEIN30(?int $InsulineGLYVEIN30): self
    {
        $this->InsulineGLYVEIN30 = $InsulineGLYVEIN30;

        return $this;
    }

    public function getInsulineGLYVEIN45(): ?int
    {
        return $this->InsulineGLYVEIN45;
    }

    public function setInsulineGLYVEIN45(?int $InsulineGLYVEIN45): self
    {
        $this->InsulineGLYVEIN45 = $InsulineGLYVEIN45;

        return $this;
    }

    public function getInsulineGLYVEIN60(): ?int
    {
        return $this->InsulineGLYVEIN60;
    }

    public function setInsulineGLYVEIN60(?int $InsulineGLYVEIN60): self
    {
        $this->InsulineGLYVEIN60 = $InsulineGLYVEIN60;

        return $this;
    }

    public function getInsulineGLYVEIN90(): ?int
    {
        return $this->InsulineGLYVEIN90;
    }

    public function setInsulineGLYVEIN90(?int $InsulineGLYVEIN90): self
    {
        $this->InsulineGLYVEIN90 = $InsulineGLYVEIN90;

        return $this;
    }

    public function getInsulineGLYVEIN120(): ?int
    {
        return $this->InsulineGLYVEIN120;
    }

    public function setInsulineGLYVEIN120(?int $InsulineGLYVEIN120): self
    {
        $this->InsulineGLYVEIN120 = $InsulineGLYVEIN120;

        return $this;
    }

    public function getInsulineGH0(): ?int
    {
        return $this->InsulineGH0;
    }

    public function setInsulineGH0(?int $InsulineGH0): self
    {
        $this->InsulineGH0 = $InsulineGH0;

        return $this;
    }

    public function getInsulineGH15(): ?int
    {
        return $this->InsulineGH15;
    }

    public function setInsulineGH15(?int $InsulineGH15): self
    {
        $this->InsulineGH15 = $InsulineGH15;

        return $this;
    }

    public function getInsulineGH30(): ?int
    {
        return $this->InsulineGH30;
    }

    public function setInsulineGH30(?int $InsulineGH30): self
    {
        $this->InsulineGH30 = $InsulineGH30;

        return $this;
    }

    public function getInsulineGH45(): ?int
    {
        return $this->InsulineGH45;
    }

    public function setInsulineGH45(?int $InsulineGH45): self
    {
        $this->InsulineGH45 = $InsulineGH45;

        return $this;
    }



    public function getInsulineGH60(): ?int
    {
        return $this->InsulineGH60;
    }

    public function setInsulineGH60(?int $InsulineGH60): self
    {
        $this->InsulineGH60 = $InsulineGH60;

        return $this;
    }

    public function getInsulineGH90(): ?int
    {
        return $this->InsulineGH90;
    }

    public function setInsulineGH90(?int $InsulineGH90): self
    {
        $this->InsulineGH90 = $InsulineGH90;

        return $this;
    }

    public function getInsulineGH120(): ?int
    {
        return $this->InsulineGH120;
    }

    public function setInsulineGH120(?int $InsulineGH120): self
    {
        $this->InsulineGH120 = $InsulineGH120;

        return $this;
    }

    public function getInsulineCORTISOL0(): ?int
    {
        return $this->InsulineCORTISOL0;
    }

    public function setInsulineCORTISOL0(?int $InsulineCORTISOL0): self
    {
        $this->InsulineCORTISOL0 = $InsulineCORTISOL0;

        return $this;
    }

    public function getInsulineCORTISOL15(): ?int
    {
        return $this->InsulineCORTISOL15;
    }

    public function setInsulineCORTISOL15(?int $InsulineCORTISOL15): self
    {
        $this->InsulineCORTISOL15 = $InsulineCORTISOL15;

        return $this;
    }

    public function getInsulineCORTISOL30(): ?int
    {
        return $this->InsulineCORTISOL30;
    }

    public function setInsulineCORTISOL30(?int $InsulineCORTISOL30): self
    {
        $this->InsulineCORTISOL30 = $InsulineCORTISOL30;

        return $this;
    }

    public function getInsulineCORTISOL45(): ?int
    {
        return $this->InsulineCORTISOL45;
    }

    public function setInsulineCORTISOL45(?int $InsulineCORTISOL45): self
    {
        $this->InsulineCORTISOL45 = $InsulineCORTISOL45;

        return $this;
    }

    public function getInsulineCORTISOL60(): ?int
    {
        return $this->InsulineCORTISOL60;
    }

    public function setInsulineCORTISOL60(?int $InsulineCORTISOL60): self
    {
        $this->InsulineCORTISOL60 = $InsulineCORTISOL60;

        return $this;
    }

    public function getInsulineCORTISOL90(): ?int
    {
        return $this->InsulineCORTISOL90;
    }

    public function setInsulineCORTISOL90(?int $InsulineCORTISOL90): self
    {
        $this->InsulineCORTISOL90 = $InsulineCORTISOL90;

        return $this;
    }

    public function getInsulineCORTISOL120(): ?int
    {
        return $this->InsulineCORTISOL120;
    }

    public function setInsulineCORTISOL120(?int $InsulineCORTISOL120): self
    {
        $this->InsulineCORTISOL120 = $InsulineCORTISOL120;

        return $this;
    }

    public function getInsulineACTH0(): ?int
    {
        return $this->InsulineACTH0;
    }

    public function setInsulineACTH0(?int $InsulineACTH0): self
    {
        $this->InsulineACTH0 = $InsulineACTH0;

        return $this;
    }

    public function getInsulineACTH15(): ?int
    {
        return $this->InsulineACTH15;
    }

    public function setInsulineACTH15(?int $InsulineACTH15): self
    {
        $this->InsulineACTH15 = $InsulineACTH15;

        return $this;
    }

    public function getInsulineACTH30(): ?int
    {
        return $this->InsulineACTH30;
    }

    public function setInsulineACTH30(?int $InsulineACTH30): self
    {
        $this->InsulineACTH30 = $InsulineACTH30;

        return $this;
    }

    public function getInsulineACTH45(): ?int
    {
        return $this->InsulineACTH45;
    }

    public function setInsulineACTH45(?int $InsulineACTH45): self
    {
        $this->InsulineACTH45 = $InsulineACTH45;

        return $this;
    }

    public function getInsulineACTH60(): ?int
    {
        return $this->InsulineACTH60;
    }

    public function setInsulineACTH60(?int $InsulineACTH60): self
    {
        $this->InsulineACTH60 = $InsulineACTH60;

        return $this;
    }

    public function getInsulineACTH90(): ?int
    {
        return $this->InsulineACTH90;
    }

    public function setInsulineACTH90(?int $InsulineACTH90): self
    {
        $this->InsulineACTH90 = $InsulineACTH90;

        return $this;
    }

    public function getInsulineACTH120(): ?int
    {
        return $this->InsulineACTH120;
    }

    public function setInsulineACTH120(?int $InsulineACTH120): self
    {
        $this->InsulineACTH120 = $InsulineACTH120;

        return $this;
    }

    public function getLDopaGLYCAP0(): ?int
    {
        return $this->LDopaGLYCAP0;
    }

    public function setLDopaGLYCAP0(?int $LDopaGLYCAP0): self
    {
        $this->LDopaGLYCAP0 = $LDopaGLYCAP0;

        return $this;
    }

    public function getLDopaGLYCAP15(): ?int
    {
        return $this->LDopaGLYCAP15;
    }

    public function setLDopaGLYCAP15(?int $LDopaGLYCAP15): self
    {
        $this->LDopaGLYCAP15 = $LDopaGLYCAP15;

        return $this;
    }

    public function getLDopaGLYCAP30(): ?int
    {
        return $this->LDopaGLYCAP30;
    }

    public function setLDopaGLYCAP30(?int $LDopaGLYCAP30): self
    {
        $this->LDopaGLYCAP30 = $LDopaGLYCAP30;

        return $this;
    }

    public function getLDopaGLYCAP45(): ?int
    {
        return $this->LDopaGLYCAP45;
    }

    public function setLDopaGLYCAP45(?int $LDopaGLYCAP45): self
    {
        $this->LDopaGLYCAP45 = $LDopaGLYCAP45;

        return $this;
    }

    public function getLDopaGLYCAP60(): ?int
    {
        return $this->LDopaGLYCAP60;
    }

    public function setLDopaGLYCAP60(?int $LDopaGLYCAP60): self
    {
        $this->LDopaGLYCAP60 = $LDopaGLYCAP60;

        return $this;
    }

    public function getLDopaGLYCAP90(): ?int
    {
        return $this->LDopaGLYCAP90;
    }

    public function setLDopaGLYCAP90(?int $LDopaGLYCAP90): self
    {
        $this->LDopaGLYCAP90 = $LDopaGLYCAP90;

        return $this;
    }

    public function getLDopaGLYCAP120(): ?int
    {
        return $this->LDopaGLYCAP120;
    }

    public function setLDopaGLYCAP120(?int $LDopaGLYCAP120): self
    {
        $this->LDopaGLYCAP120 = $LDopaGLYCAP120;

        return $this;
    }

    public function getLDopaGLYVEIN0(): ?int
    {
        return $this->LDopaGLYVEIN0;
    }

    public function setLDopaGLYVEIN0(?int $LDopaGLYVEIN0): self
    {
        $this->LDopaGLYVEIN0 = $LDopaGLYVEIN0;

        return $this;
    }

    public function getLDopaGLYVEIN15(): ?int
    {
        return $this->LDopaGLYVEIN15;
    }

    public function setLDopaGLYVEIN15(?int $LDopaGLYVEIN15): self
    {
        $this->LDopaGLYVEIN15 = $LDopaGLYVEIN15;

        return $this;
    }

    public function getLDopaGLYVEIN30(): ?int
    {
        return $this->LDopaGLYVEIN30;
    }

    public function setLDopaGLYVEIN30(?int $LDopaGLYVEIN30): self
    {
        $this->LDopaGLYVEIN30 = $LDopaGLYVEIN30;

        return $this;
    }

    public function getLDopaGLYVEIN45(): ?int
    {
        return $this->LDopaGLYVEIN45;
    }

    public function setLDopaGLYVEIN45(?int $LDopaGLYVEIN45): self
    {
        $this->LDopaGLYVEIN45 = $LDopaGLYVEIN45;

        return $this;
    }

    public function getLDopaGLYVEIN60(): ?int
    {
        return $this->LDopaGLYVEIN60;
    }

    public function setLDopaGLYVEIN60(?int $LDopaGLYVEIN60): self
    {
        $this->LDopaGLYVEIN60 = $LDopaGLYVEIN60;

        return $this;
    }

    public function getLDopaGLYVEIN90(): ?int
    {
        return $this->LDopaGLYVEIN90;
    }

    public function setLDopaGLYVEIN90(?int $LDopaGLYVEIN90): self
    {
        $this->LDopaGLYVEIN90 = $LDopaGLYVEIN90;

        return $this;
    }

    public function getLDopaGLYVEIN120(): ?int
    {
        return $this->LDopaGLYVEIN120;
    }

    public function setLDopaGLYVEIN120(?int $LDopaGLYVEIN120): self
    {
        $this->LDopaGLYVEIN120 = $LDopaGLYVEIN120;

        return $this;
    }

    public function getLDopaGH0(): ?int
    {
        return $this->LDopaGH0;
    }

    public function setLDopaGH0(?int $LDopaGH0): self
    {
        $this->LDopaGH0 = $LDopaGH0;

        return $this;
    }

    public function getLDopaGH15(): ?int
    {
        return $this->LDopaGH15;
    }

    public function setLDopaGH15(?int $LDopaGH15): self
    {
        $this->LDopaGH15 = $LDopaGH15;

        return $this;
    }

    public function getLDopaGH30(): ?int
    {
        return $this->LDopaGH30;
    }

    public function setLDopaGH30(?int $LDopaGH30): self
    {
        $this->LDopaGH30 = $LDopaGH30;

        return $this;
    }

    public function getLDopaGH45(): ?int
    {
        return $this->LDopaGH45;
    }

    public function setLDopaGH45(?int $LDopaGH45): self
    {
        $this->LDopaGH45 = $LDopaGH45;

        return $this;
    }

    public function getLDopaGH60(): ?int
    {
        return $this->LDopaGH60;
    }

    public function setLDopaGH60(?int $LDopaGH60): self
    {
        $this->LDopaGH60 = $LDopaGH60;

        return $this;
    }

    public function getLDopaGH90(): ?int
    {
        return $this->LDopaGH90;
    }

    public function setLDopaGH90(?int $LDopaGH90): self
    {
        $this->LDopaGH90 = $LDopaGH90;

        return $this;
    }

    public function getLDopaGH120(): ?int
    {
        return $this->LDopaGH120;
    }

    public function setLDopaGH120(?int $LDopaGH120): self
    {
        $this->LDopaGH120 = $LDopaGH120;

        return $this;
    }

    public function getLDopaCORTISOL0(): ?int
    {
        return $this->LDopaCORTISOL0;
    }

    public function setLDopaCORTISOL0(?int $LDopaCORTISOL0): self
    {
        $this->LDopaCORTISOL0 = $LDopaCORTISOL0;

        return $this;
    }

    public function getLDopaCORTISOL15(): ?int
    {
        return $this->LDopaCORTISOL15;
    }

    public function setLDopaCORTISOL15(?int $LDopaCORTISOL15): self
    {
        $this->LDopaCORTISOL15 = $LDopaCORTISOL15;

        return $this;
    }

    public function getLDopaCORTISOL30(): ?int
    {
        return $this->LDopaCORTISOL30;
    }

    public function setLDopaCORTISOL30(?int $LDopaCORTISOL30): self
    {
        $this->LDopaCORTISOL30 = $LDopaCORTISOL30;

        return $this;
    }

    public function getLDopaCORTISOL45(): ?int
    {
        return $this->LDopaCORTISOL45;
    }

    public function setLDopaCORTISOL45(?int $LDopaCORTISOL45): self
    {
        $this->LDopaCORTISOL45 = $LDopaCORTISOL45;

        return $this;
    }

    public function getLDopaCORTISOL60(): ?int
    {
        return $this->LDopaCORTISOL60;
    }

    public function setLDopaCORTISOL60(?int $LDopaCORTISOL60): self
    {
        $this->LDopaCORTISOL60 = $LDopaCORTISOL60;

        return $this;
    }

    public function getLDopaCORTISOL90(): ?int
    {
        return $this->LDopaCORTISOL90;
    }

    public function setLDopaCORTISOL90(?int $LDopaCORTISOL90): self
    {
        $this->LDopaCORTISOL90 = $LDopaCORTISOL90;

        return $this;
    }

    public function getLDopaCORTISOL120(): ?int
    {
        return $this->LDopaCORTISOL120;
    }

    public function setLDopaCORTISOL120(?int $LDopaCORTISOL120): self
    {
        $this->LDopaCORTISOL120 = $LDopaCORTISOL120;

        return $this;
    }

    public function getLDopaACTH0(): ?int
    {
        return $this->LDopaACTH0;
    }

    public function setLDopaACTH0(?int $LDopaACTH0): self
    {
        $this->LDopaACTH0 = $LDopaACTH0;

        return $this;
    }

    public function getLDopaACTH15(): ?int
    {
        return $this->LDopaACTH15;
    }

    public function setLDopaACTH15(?int $LDopaACTH15): self
    {
        $this->LDopaACTH15 = $LDopaACTH15;

        return $this;
    }

    public function getLDopaACTH30(): ?int
    {
        return $this->LDopaACTH30;
    }

    public function setLDopaACTH30(?int $LDopaACTH30): self
    {
        $this->LDopaACTH30 = $LDopaACTH30;

        return $this;
    }

    public function getLDopaACTH45(): ?int
    {
        return $this->LDopaACTH45;
    }

    public function setLDopaACTH45(?int $LDopaACTH45): self
    {
        $this->LDopaACTH45 = $LDopaACTH45;

        return $this;
    }

    public function getLDopaACTH60(): ?int
    {
        return $this->LDopaACTH60;
    }

    public function setLDopaACTH60(?int $LDopaACTH60): self
    {
        $this->LDopaACTH60 = $LDopaACTH60;

        return $this;
    }

    public function getLDopaACTH90(): ?int
    {
        return $this->LDopaACTH90;
    }

    public function setLDopaACTH90(?int $LDopaACTH90): self
    {
        $this->LDopaACTH90 = $LDopaACTH90;

        return $this;
    }

    public function getLDopaACTH120(): ?int
    {
        return $this->LDopaACTH120;
    }

    public function setLDopaACTH120(?int $LDopaACTH120): self
    {
        $this->LDopaACTH120 = $LDopaACTH120;

        return $this;
    }

    public function getTelephone(): ?int
    {
        return $this->telephone;
    }

    public function setTelephone(?int $telephone): self
    {
        $this->telephone = $telephone;

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
