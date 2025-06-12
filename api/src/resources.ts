export interface Controle {
  id: string
  reference: string | null
  remplace: string | null
  date_publication: string
  rnb_id: string | null
  travaux: string
  adresse: Adresse
  organisme: Organisme
  non_conformites: NonConformite[]
}

export type Organisme = {
  siren: string
  raison_sociale: string
}

export type Adresse = {
  id: string | null
  numero: string | null
  nom_voie: string
  code_postal: string
  code_insee: string
  nom_commune: string
}

export type NonConformite = {
  type: TypeNonConformite
  nature: NatureNonConformite
}

export enum TypeNonConformite {
  mineur = 'mineur',
  majeur = 'majeur'
}

export enum NatureNonConformite {
  quantite = 'quantite',
  qualite = 'qualite',
  performance = 'performance',
  securite = 'securite',
  administratif = 'administratif'
}
