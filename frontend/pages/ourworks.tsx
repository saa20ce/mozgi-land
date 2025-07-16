import Layout from "@/components/Layout/Layout";
import Portfolio from "@/components/Portfolio/Portfolio";
import { getWorks } from "@/lib/api";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface WorkApiData {
  id: number;
  title: string;
  description: string | null; 
  type: string;
  thumbnail: string | null; 
  images: Images[];
}
  
interface Images {
  id: number;
  image: string;
}

interface Work {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  preview: string;
  images: Images[];
}

export async function getStaticProps({ locale }: { locale: string }) {
  const translations = await serverSideTranslations(locale, ['common']);
  try {
    const data = await getWorks(locale);
    const formattedWorks = data.map((item: WorkApiData): Work => ({
      id: item.id,
      title: item.title,
      subtitle: item.description || "",
      category: item.type,
      preview: item.thumbnail || "/images/project.png",
      images: item.images
    }));
    return {
      props: {
        initialWorks: formattedWorks,
        ...translations,
      },
      revalidate: 3600, 
    };
  } catch (error) {
    console.error("Ошибка при загрузке работ:", error);
    return {
      props: {
        initialWorks: [],
        ...translations,
      },
      revalidate: 3600, 
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