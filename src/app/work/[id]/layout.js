import projectsData from "@/data/projectsData";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project | Oriture",
      description: "View this project case study by Oriture design and development studio.",
    };
  }

  const title = project.detailPage?.projectTitle || project.homepage?.projectTitle || "Project";
  const description =
    project.detailPage?.description ||
    project.homepage?.homepageDetail ||
    "A case study by Oriture.";
  const thumbnail = project.homepage?.homepageThumbnail;
  const url = `https://www.oriture.co/work/${id}`;

  return {
    title: `${project.homepage?.projectTitle || title} | Oriture`,
    description: description.slice(0, 160),
    alternates: { canonical: url },
    openGraph: {
      title: `${project.homepage?.projectTitle || title} | Oriture`,
      description: description.slice(0, 160),
      url,
      type: "article",
      ...(thumbnail && {
        images: [{ url: thumbnail, alt: title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.homepage?.projectTitle || title} | Oriture`,
      description: description.slice(0, 160),
      ...(thumbnail && { images: [thumbnail] }),
    },
  };
}

export default function WorkDetailLayout({ children }) {
  return children;
}
