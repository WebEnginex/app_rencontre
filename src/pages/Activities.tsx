
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Activity type definition
interface Activity {
  id: string;
  title: string;
  price: number;
  image: string;
  promo?: boolean;
}

// Sample activities data
const activities: Activity[] = [
  {
    id: "1",
    title: "Cours de cuisine en duo",
    price: 89.00,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    promo: true
  },
  {
    id: "2",
    title: "Dégustation de vins & fromages",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "Soirée karaoké privée",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4",
    title: "Atelier peinture & cocktails",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "5",
    title: "Balade en bateau au coucher du soleil",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "6",
    title: "Cours de danse en couple",
    price: 70.00,
    image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "7", 
    title: "Escape game en duo",
    price: 60.00,
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "8",
    title: "Atelier création de parfum",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  },
];

const Activities = () => {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <header className="p-4 border-b">
        <h1 className="text-xl font-semibold">Toutes les activités</h1>
        <div className="flex justify-end items-center mt-2">
          <div className="text-sm text-gray-500 mr-2">Trier par :</div>
          <button className="text-sm flex items-center gap-1 px-2 py-1 rounded border border-gray-200">
            Meilleures ventes
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 10L11 6H4L7.5 10Z" fill="currentColor"/>
            </svg>
          </button>
          <div className="text-sm text-gray-500 ml-4">{activities.length} produits</div>
        </div>
      </header>
      
      <main className="flex-1 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover"
                />
                {activity.promo && (
                  <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                    Promo
                  </div>
                )}
              </div>
              <CardHeader className="pt-3 pb-0 px-4">
                <CardTitle className="text-base">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-2 pb-0 px-4">
                <p className="font-semibold">{activity.price.toFixed(2)}€</p>
              </CardContent>
              <CardFooter className="px-4 py-3">
                <Button className="w-full">Ajouter au panier</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      
      <Navigation />
    </div>
  );
};

export default Activities;
