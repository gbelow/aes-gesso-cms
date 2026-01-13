interface ServicoCategoriaOption {
  title: string;
  value: string;
}

interface ServicoField {
  name: string;
  title: string;
  type: string;
  validation?: (Rule: any) => any;
  options?: {
    list: ServicoCategoriaOption[];
  };
  of?: { type: string; options?: { hotspot: boolean } }[];
}

interface ServicoDocument {
  name: string;
  title: string;
  type: string;
  fields: ServicoField[];
}

const servicosSchema: ServicoDocument = {
  name: 'services',
  title: 'Nossos Serviços',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nome do Serviço',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Tipo de Serviço',
      type: 'string',
      options: {
        list: [
          { title: 'Drywall', value: 'drywall' },
          { title: 'Modular', value: 'modular' },
          { title: 'Steel Frame', value: 'steelFrame' },
          { title: 'Forro convencional', value: 'convencional' },
          { title: 'Nichos', value: 'nichos' },
          { title: 'Roda teto', value: 'rodaTeto' },
          { title: '3D', value: '3d' },
          { title: 'Boiserie', value: 'boiserie' },
        ],
      },
    },
    {
      name: 'images', // Mudamos para plural
      title: 'Galeria de Fotos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'description',
      title: 'Descrição do Serviço',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

export default servicosSchema;
