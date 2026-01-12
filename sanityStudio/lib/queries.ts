export const obrasQuery = `*[_type == "obra"] | order(data desc) {
  _id,
  titulo,
  categoria,
  "imageUrl": imagem.asset->url,
  data
}`;