


import PdfViewer from "@/component/PdfViewer";
import moment from "moment";



async function getMateriById(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_PRO}/api/materi/detail/${id}`, {
    cache: "no-store", // this will fresh data on every fetch request;
    // next: { revalidate: 10 }, // and this , will be refresh data every 10 seconds;
  });
  if (!res) {
    return notFound();
  }
  return res.json();
}


const MateriDetail = async ({ params }) => {

  const materi = await getMateriById(params?.id);



  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{materi.title}</h1>
      <p className="mt-2">Guru: {materi.teacher}</p>
      <p className="mt-2">Deskripsi: {materi.desc}</p>
      <p className="mt-2">
        Tanggal: {moment(materi?.date).format("LLL")}
      </p>
      <div className="my-8">
        <a
          href={materi.contentUrl}
          download
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Download Materi PDF
        </a>
      </div>
      <PdfViewer pdfUrl={materi?.contentUrl} />
    </div>
  );
}

export default MateriDetail;