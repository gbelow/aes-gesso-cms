import { client } from "@/sanityStudio/lib/sanity";
import { urlFor } from "@/sanityStudio/lib/sanity";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function getObras() {
  const query = `*[_type == "obra"] | order(data desc)`;
  return await client.fetch(query);
}

export default async function GaleriaObras() {
  const obras = await getObras();

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {obras.map((obra: any) => (
        <Card key={obra._id} className="overflow-hidden">
          <div className="relative h-64 w-full">
            <Image 
              src={urlFor(obra.imagem).url()} 
              alt={obra.titulo}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <span className="text-xs uppercase text-muted-foreground">{obra.categoria}</span>
            <CardTitle>{obra.titulo}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </section>
  );
}