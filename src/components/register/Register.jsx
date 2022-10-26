import { useState } from 'react'

const Register = () => {
  const [nama, setNama] = useState('')
  const [npwp, setNpwp] = useState('')
  const [email, setEmail] = useState('')
  const [penghasilan, setPenghasilan] = useState('')
  const [telepon, setTelepon] = useState('')
  const [nikah, setNikah] = useState('')
  const [nik, setNik] = useState('')
  const [ibuKandung, setIbuKandung] = useState('')
  const [alamat, setAlamat] = useState('')
  const [role, setRole] = useState('')
  const [term, setTerm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(
      nama,
      npwp,
      email,
      penghasilan,
      nikah,
      nik,
      telepon,
      ibuKandung,
      alamat,
      role,
      term
    )
  }

  return (
    <div className='grid place-content-center justify-center min-h-screen bg-background'>
      <div className='w-[942px] bg-white px-8 py-3 my-9 rounded-md'>
        <h1 className='font-semibold text-4xl'>Daftar Akun Baru</h1>
        <p className='mt-1 mb-6 font-medium text-2xl'>Masukan Identitas Anda</p>

        <form action='' onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-x-9 gap-y-3'>
            {/* NAMA */}
            <div className='flex flex-1 flex-col'>
              <label
                htmlFor='nama'
                className='text-[#323232] font-medium text-[16px] mb-[10px]'
              >
                Nama Lengkap <span className='text-red-600'>*</span>
              </label>
              <input
                type='text'
                name='nama'
                id='nama'
                className='text-base px-3 py-3 border-[#9DE09D] border-[1px] rounded-[5px] focus:ring-1 focus:ring-green-400 outline-none'
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            {/* END NAMA */}
            {/* NPWP */}
            <div className='flex flex-1 flex-col'>
              <label
                htmlFor='npwp'
                className='text-[#323232] font-medium text-[16px] mb-[10px]'
              >
                NPWP (opsional)
              </label>
              <input
                type='text'
                name='npwp'
                id='npwp'
                className='text-base px-3 py-3 border-[#9DE09D] border-[1px] rounded-[5px] focus:ring-1 focus:ring-green-400 outline-none'
                value={npwp}
                onChange={(e) => setNpwp(e.target.value)}
              />
            </div>
            {/* END NPWP */}
            {/* EMAIL */}
            <div className='flex flex-1 flex-col'>
              <label
                htmlFor='email'
                className='text-[#323232] font-medium text-[16px] mb-[10px]'
              >
                Email <span className='text-red-600'>*</span>
              </label>
              <input
                type='text'
                name='email'
                id='email'
                className='text-base px-3 py-3 border-[#9DE09D] border-[1px] rounded-[5px] focus:ring-1 focus:ring-green-400 outline-none'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* END EMAIL */}
            {/* PENGHASILAN PER TAHUN */}
            <div className='flex flex-1 flex-col'>
              <label
                htmlFor='ppt'
                className='text-[#323232] font-medium text-[16px] mb-[10px]'
              >
                Penghasilan per tahun <span className='text-red-600'>*</span>
              </label>
              <input
                type='text'
                name='ppt'
                id='ppt'
                className='text-base px-3 py-3 border-[#9DE09D] border-[1px] rounded-[5px] focus:ring-1 focus:ring-green-400 outline-none'
                value={penghasilan}
                onChange={(e) => setPenghasilan(e.target.value)}
              />
            </div>
            {/* END PENGHASILAN PER TAHUN */}
            {/* NOMOR TELEPON */}
            <div className='flex flex-1 flex-col'>
              <label
                htmlFor='telepon'
                className='text-[#323232] font-medium text-[16px] mb-[10px]'
              >
                Nomor telepon <span className='text-red-600'>*</span>
              </label>
              <input
                type='tel'
                name='telepon'
                id='telepon'
                className='text-base px-3 py-3 border-[#9DE09D] border-[1px] rounded-[5px] focus:ring-1 focus:ring-green-400 outline-none'
                value={telepon}
                onChange={(e) => setTelepon(e.target.value)}
              />
            </div>
            {/* END NOMOR TELEPON */}
            {/* STATUS NIKAH */}
            <div className='flex flex-1 flex-col'>
              <label
                htmlFor='nikah'
                className='text-[#323232] font-medium text-[16px] mb-[10px]'
              >
                Status nikah <span className='text-red-600'>*</span>
              </label>
              <select
                name='nikah'
                id='nikah'
                className='text-base px-3 py-3 border-[#9DE09D] border-[1px] rounded-[5px] focus:ring-1 focus:ring-green-400 outline-none'
                onChange={(e) => setNikah(e.target.value)}
              >
                <option value='belum menikah'>Belum Menikah</option>
                <option value='sudah menikah'>Sudah Menikah</option>
              </select>
            </div>
            {/* END STATUS NIKAH */}
            {/* NIK */}
            <div className='flex flex-1 flex-col'>
              <label
                htmlFor='nik'
                className='text-[#323232] font-medium text-[16px] mb-[10px]'
              >
                NIK <span className='text-red-600'>*</span>
              </label>
              <input
                type='text'
                name='nik'
                id='nik'
                className='text-base px-3 py-3 border-[#9DE09D] border-[1px] rounded-[5px] focus:ring-1 focus:ring-green-400 outline-none'
                value={nik}
                onChange={(e) => setNik(e.target.value)}
              />
            </div>
            {/* END NIK */}
            {/* NAMA IBU KANDUNG */}
            <div className='flex flex-1 flex-col'>
              <label
                htmlFor='nama-ibu-kandung'
                className='text-[#323232] font-medium text-[16px] mb-[10px]'
              >
                Nama Ibu Kandung <span className='text-red-600'>*</span>
              </label>
              <input
                type='text'
                name='nama-ibu-kandung'
                id='nama-ibu-kandung'
                className='text-base px-3 py-3 border-[#9DE09D] border-[1px] rounded-[5px] focus:ring-1 focus:ring-green-400 outline-none'
                value={ibuKandung}
                onChange={(e) => setIbuKandung(e.target.value)}
              />
            </div>
            {/* END NAMA IBU KANDUNG */}
            {/* ALAMAT */}
            <div className='flex flex-1 flex-col'>
              <label
                htmlFor='alamat'
                className='text-[#323232] font-medium text-[16px] mb-[10px]'
              >
                Alamat <span className='text-red-600'>*</span>
              </label>
              <input
                type='text'
                name='alamat'
                id='alamat'
                className='text-base px-3 py-3 border-[#9DE09D] border-[1px] rounded-[5px] focus:ring-1 focus:ring-green-400 outline-none'
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
              />
            </div>
            {/* END ALAMAT */}
            {/* SEBAGAI */}
            <div className='flex flex-1 flex-col'>
              <label className='text-[#323232] font-medium text-[16px] mb-[10px]'>
                Sebagai <span className='text-red-600'>*</span>
              </label>
              <div>
                <input
                  type='radio'
                  name='role'
                  id='pelaku'
                  value={'pelaku umkm'}
                  onChange={(e) => setRole(e.target.value)}
                />{' '}
                <label htmlFor='pelaku'>Pelaku UMKM</label>
              </div>
              <div>
                <input
                  type='radio'
                  name='role'
                  id='investor'
                  value={'investor'}
                  onChange={(e) => setRole(e.target.value)}
                />{' '}
                <label htmlFor='investor'>Investor</label>
              </div>
            </div>
            {/* END SEBAGAI */}
          </div>
          <div className='flex gap-x-3 mt-7'>
            <input
              type='checkbox'
              name='term'
              id='term'
              value={'setuju'}
              onChange={(e) => setTerm(e.target.checked)}
            />
            <label htmlFor='term' className='font-normal text-[10px]'>
              Saya menyatakan data yang dimasukkan adalah benar dan sesuai
              dengan keadaan aslinya,
              <br /> saya bersedia jika dikemudian hari ditemukan ketidakcocokan
              data maka saya siap menerima konsekuensinya
            </label>
          </div>
          <div className='flex flex-row-reverse'>
            <button
              type='submit'
              className='bg-primary px-12 py-2 text-white text-base font-semibold rounded-md'
            >
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
