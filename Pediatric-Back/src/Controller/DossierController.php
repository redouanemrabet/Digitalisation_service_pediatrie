<?php

namespace App\Controller;

use App\Entity\AntiFamiliaux;
use App\Entity\AntiPersonnel;
use App\Entity\Courbe;
use App\Entity\DiagnosticRetenuPEC;
use App\Entity\Document;
use App\Entity\Dossier;
use App\Entity\ExamenPhysique;
use App\Entity\Paraclinique;
use App\Entity\Suivi;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Lexik\Bundle\JWTAuthenticationBundle\Exception\InvalidTokenException;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use App\Repository\DossierRepository;
use Doctrine\Persistence\ManagerRegistry;

class DossierController extends AbstractController
{
    private $jwtManager;

    public function __construct(JWTTokenManagerInterface $jwtManager)
    {
        $this->jwtManager = $jwtManager;
    }

    /**
     * @Route("/api/patients/{id}/dossiers", name="get_patient_dossiers", methods={"GET"})
     */
    public function getPatientDossiers(int $id, Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $repository = $doctrine->getRepository(Dossier::class);
        $dossiers = $repository->findBy(['patient' => $id]);

        // Convertir les dossiers en un format approprié (par exemple, tableau JSON)
        $dossiersData = [];
        foreach ($dossiers as $dossier) {
            $dossiersData[] = [
                'id' => $dossier->getId(),
                'category' => $dossier->getType(),
                'patient' => $dossier->getPatient(),
                // Ajoutez d'autres propriétés de dossier si nécessaire
            ];
        }

        return $this->json($dossiersData);
    }

    /**
     * @Route("/api/dossier/{id}/suivis", name="get_suivis_dossier", methods={"GET"})
     */
    public function getSuivisDossier(int $id, Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $repository = $doctrine->getRepository(Suivi::class);
        $suivis = $repository->findBy(['dossier'=>$id]);


        // Convertir les dossiers en un format approprié (par exemple, tableau JSON)
        $suivisData = [];

        foreach ($suivis as $suivi) {
            $suivisData[] = [
                'id' => $suivi->getId(),
                'suivi' => $suivi->getSuivi(),
                'date' => $suivi->getDate(),
                // Ajoutez d'autres propriétés de dossier si nécessaire
            ];
        }

        return $this->json($suivisData);
    }

    /**
     * @Route("/api/dossier/{id}/courbe", name="get_courbe_dossier", methods={"GET"})
     */
    public function getCourbeDossier(int $id, Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $repository = $doctrine->getRepository(Courbe::class);
        $courbes = $repository->findBy(['dossier'=>$id]);


        // Convertir les dossiers en un format approprié (par exemple, tableau JSON)
        $courbesData = [];

        foreach ($courbes as $courbe) {

            $courbesData[] = [
                'id' => $courbe->getId(),
                'age' => $courbe->getAge(),
                'height' => $courbe->getHeight(),
                'weight' => $courbe->getWeight(),
                // Ajoutez d'autres propriétés de dossier si nécessaire
            ];
        }

        return $this->json($courbesData);
    }

    /**
     * @Route("/api/patients/{id}/forms", name="get_patient_forms", methods={"GET"})
     */
    public function getPatientForms(int $id, Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $repository = $doctrine->getRepository(Dossier::class);
        $dossier = $repository->find($id);


         $antiFamiliaux = $dossier->getAntiFamiliauxes()[0]->getId();
         $antiPersonnel = $dossier->getAntiPersonnels()[0]->getId();
        $diagnosticRetenuPEC = $dossier->getDiagnosticRetenuPECs()[0]->getId();
        $examenPhysique = $dossier->getExamenPhysiques()[0]->getId();
        $paraclinique = $dossier->getParacliniques()[0]->getId();
        $courbe = $dossier->getCourbes()[0]->getId();


        // Convertir les dossiers en un format approprié (par exemple, tableau JSON)
       $dossiersData = [];

            $dossiersData[] = [

                'id' => $dossier->getId(),
                'antiFamiliaux' => $antiFamiliaux,
                'antiPersonnel' => $antiPersonnel ,
                'courbe' => $courbe ,
                'diagnosticRetenuPEC' => $diagnosticRetenuPEC ,
                'examenPhysique' => $examenPhysique ,
                'paraclinique' => $paraclinique ,



            ];


        return $this->json($dossiersData);
    }


    /**
     * @Route("/api/patients/{id}/initialisation", name="ini_patient_forms", methods={"POST"})
     */
    public function initialiserForms(int $id, Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $repository = $doctrine->getRepository(Dossier::class);
        $dossier = $repository->find($id);


        if($dossier){

            $Manager = $doctrine->getManager();

            $antiFamiliaux = new AntiFamiliaux();
            $antiFamiliaux->setDiarrhee(false);
            $antiFamiliaux->setVomissements(false);
            $antiFamiliaux->setDistensionAbominale(false);
            $antiFamiliaux->setCephalees(false);
            $antiFamiliaux->setTroublesVisuels(false);
            $antiFamiliaux->setVomissementsHTIC(false);
            $antiFamiliaux->setConstipation(false);
            $antiFamiliaux->setRectorragies(false);
            $antiFamiliaux->setDouleurAbdominale(false);
            $antiFamiliaux->setPaleur(false);
            $antiFamiliaux->setAsthenie(false);
            $antiFamiliaux->setAnorexie(false);
            $antiFamiliaux->setBoulimie(false);
            $antiFamiliaux->setSyndromePolyuroPolydipsique(false);
            $antiFamiliaux->setDossier($dossier) ;


            $antiPersonnel = new AntiPersonnel();
            $antiPersonnel->setDossier($dossier) ;

            $diagnosticRetenuPEC = new DiagnosticRetenuPEC();
            $diagnosticRetenuPEC->setDossier($dossier) ;

            $examenPhysique = new ExamenPhysique();
            $examenPhysique->setFenteLabiale(false);
            $examenPhysique->setFentePalatine(false);
            $examenPhysique->setIncisiveCentraleUnique(false);
            $examenPhysique->setFlechissement(false);
            $examenPhysique->setStagnation(false);
            $examenPhysique->setDossier($dossier) ;

            $paraclinique = new Paraclinique();
            $paraclinique->setDossier($dossier) ;

            $courbe = new Courbe();
            $courbe->setDossier($dossier) ;




            $Manager->persist($antiPersonnel);
            $Manager->persist($antiFamiliaux);
            $Manager->persist($diagnosticRetenuPEC);
            $Manager->persist($examenPhysique);
            $Manager->persist($paraclinique);
            $Manager->persist($courbe);



        }

        $Manager->flush();



       return new JsonResponse();

    }

    /**
     * @Route("/api/Document/{id}", name="app_document", methods={"POST"})
     */
    public function create(Request $request, EntityManagerInterface $entityManager, ManagerRegistry $doctrine, $id): JsonResponse
    {


        return new JsonResponse($request);
    }


}
