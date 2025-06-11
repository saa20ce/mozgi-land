import Layout from "@/components/Layout/Layout";
import Portfolio from "@/components/Portfolio/Portfolio";
import { getWorks } from "@/lib/api";

interface WorkApiData {
  id: number;
  title: string;
  description: string | null; 
  type: string;
  thumbnail: string | null; 
}

interface Work {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
}

export async function getServerSideProps() {
  try {
    const data = await getWorks();
    const formattedWorks = data.map((item: WorkApiData): Work => ({
      id: item.id,
      title: item.title,
      subtitle: item.description || "",
      category: item.type,
      image: item.thumbnail || "/images/project.png",
    }));
    return {
      props: {
        initialWorks: formattedWorks,
      },
    };
  } catch (error) {
    console.error("Ошибка при загрузке работ:", error);
    return {
      props: {
        initialWorks: [],
      },
    };
  }
}

export default function OurWorksPage({ initialWorks }: { initialWorks: Work[] }) {
  return (
    <Layout>
      <Portfolio initialWorks={initialWorks} />
    </Layout>
  );
}