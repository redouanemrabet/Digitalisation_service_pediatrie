<?php

namespace App\Repository;

use App\Entity\ExamenPhysique;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ExamenPhysique>
 *
 * @method ExamenPhysique|null find($id, $lockMode = null, $lockVersion = null)
 * @method ExamenPhysique|null findOneBy(array $criteria, array $orderBy = null)
 * @method ExamenPhysique[]    findAll()
 * @method ExamenPhysique[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExamenPhysiqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ExamenPhysique::class);
    }

    public function save(ExamenPhysique $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ExamenPhysique $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ExamenPhysique[] Returns an array of ExamenPhysique objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('e.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ExamenPhysique
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
