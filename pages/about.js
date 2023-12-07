export default function about() {
    return (
        <>
        <div className="bg-blue-200 min-h-screen p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg mb-6">
                    Nama    : Muhamad Ibnu Khaidar Hafiz <br/>
                    Kelas   : 3IA15 <br/>
                    NPM     : 50421867
                </p>
                <p className="text-lg mb-6">
                    Website ini dibuat untuk memenuhi persyaratan Ujian Pemrograman WEB
                    yang dimana project tersebut adalah membuat website dari semua materi
                    yang telah diajarkan selama 7 pertemuan dan menambahkan fitur CRUD untuk
                    aplikasi yang dibuat
                </p>
                <p className="text-lg mb-6">
                    Website ini dibuat dengan Framework Next.JS 12 dan Tailwind CSS yang sangat
                    membantu untuk styling css tersebut.
                </p>
                <p className='text-lg mb-6'>
                    Fitur CRUD dibuat dengan koneksi Next.JS dengan Local Storage
                </p>
            </div>
        </div>
        </>
    )
}