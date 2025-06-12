import { Controle, NatureNonConformite } from './resources'

const countNonConformites = (
  resource: Controle,
  nature: NatureNonConformite
) => {
  return resource.non_conformites.filter(i => i.nature === nature).length
}

export const dataset = (resource: Controle) => ({
  id: resource.id,
  reference: resource.reference,
  remplace: resource.remplace,
  date_publication: resource.date_publication,
  rnb_id: resource.rnb_id,
  travaux: resource.travaux,
  'adresse/id': resource.adresse.id,
  'adresse/numero': resource.adresse.numero,
  'adresse/nom_voie': resource.adresse.nom_voie,
  'adresse/code_postal': resource.adresse.code_postal,
  'adresse/code_insee': resource.adresse.code_insee,
  'adresse/nom_commune': resource.adresse.nom_commune,
  'organisme/siren': resource.organisme.siren,
  'organisme/raison_sociale': resource.organisme.raison_sociale,
  'non_conformites/quantite': countNonConformites(
    resource,
    NatureNonConformite.quantite
  ),
  'non_conformites/qualite': countNonConformites(
    resource,
    NatureNonConformite.qualite
  ),
  'non_conformites/performance': countNonConformites(
    resource,
    NatureNonConformite.performance
  ),
  'non_conformites/securite': countNonConformites(
    resource,
    NatureNonConformite.securite
  ),
  'non_conformites/administratif': countNonConformites(
    resource,
    NatureNonConformite.administratif
  ),
  'non_conformites/total': resource.non_conformites.length
})

