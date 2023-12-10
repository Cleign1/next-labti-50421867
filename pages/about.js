export default function about() {
    return (
        <>
        <div>
        <div className="bg-gradient-to-r from-red-700 to-indigo-700 
            min-h-screen p-8 text-white">
            <div className="max-w-2xl mx-auto p-6 border-4 rounded-3xl">
                <h1 className="text-4xl font-bold mb-4">About This Project</h1>
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
                    Website ini dibuat dengan Framework Next.js 12 dan Tailwind CSS yang sangat
                    membantu untuk styling css tersebut.
                </p>
                <p className='text-lg mb-6'>
                    Fitur CRUD dibuat dengan koneksi Next.js dengan Local Storage
                </p>
            </div>
        </div>
        </div>
        </>
    )
}