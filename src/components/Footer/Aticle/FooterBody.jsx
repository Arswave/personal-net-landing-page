import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import Dropdown from 'react-bootstrap/Dropdown';

const FooterBody = () => {
    return (
        <div className=' d-flex row d-inline-block my-5'>
            <div className='flex-grow-1 col-sm-12 col-md-3 d-sm-none d-md-block'>
                <h6 className='fw-bold mb-4'>Hakkımızda</h6>
                <p className='mb-3'>Doğru İşe, Doğru Personeli <br />
                    Bulmanın En Kolay Yolu <br />
                    Personel.net <br />
                </p>
                <p>0850 308 8390</p>
                <p>info@personel.net</p>
            </div>
            <Dropdown className="mx-2 d-sm-block d-md-none my-2">
                <Dropdown.Toggle variant='secondary' className='w-100 p-2'>
                    Şirket
                </Dropdown.Toggle>

                <Dropdown.Menu variant='dark' className='w-100'>
                    <Dropdown.Item href="#hakkimizda"> Hakkımızda</Dropdown.Item>
                    <Dropdown.Item href="#kariyer">Kariyer</Dropdown.Item>
                    <Dropdown.Item href="#blog">Blog</Dropdown.Item>
                    <Dropdown.Item href="#SSS">SSS</Dropdown.Item>
                    <Dropdown.Item href="#iletisim">İletişim</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className='d-flex flex-column flex-grow-1 col-sm-12 col-md-2 d-none d-sm-none d-md-flex'>
                <h6 className='fw-bold mb-4'> Şirket </h6>
                <a className='text-decoration-none text-black' href='/'>Hakkımızda</a>
                <a className='text-decoration-none text-black my-2' href='/'>Kariyer</a>
                <a className='text-decoration-none text-black' href='/'>Blog</a>
                <a className='text-decoration-none text-black my-2' href='/'>SSS</a>
                <a className='text-decoration-none text-black' href='/'>İletişim</a>
            </div>
            <Dropdown className="mx-2 d-sm-block d-md-none my-2">
                <Dropdown.Toggle variant='secondary' className='w-100 p-2'>
                    Hizmet
                </Dropdown.Toggle>
                <Dropdown.Menu variant='dark' className='w-100'>
                    <Dropdown.Item href="#isIlanlari"> İş İlanları </Dropdown.Item>
                    <Dropdown.Item href="#sirketler"> Şirketler </Dropdown.Item>
                    <Dropdown.Item href="#adaylar"> Adaylar </Dropdown.Item>
                    <Dropdown.Item href="#fiyatlandirma"> Fiyatlandirma </Dropdown.Item>
                    <Dropdown.Item href="#partner"> Partner </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className='d-flex flex-column flex-grow-1 col-sm-12 col-md-2 d-none d-sm-none d-md-flex'>
                <h6 className='fw-bold mb-4'>Hizmet</h6>
                <a className='text-decoration-none text-black' href='/'>İş İlanları</a>
                <a className='text-decoration-none text-black my-2' href='/'>Şirketler</a>
                <a className='text-decoration-none text-black' href='/'>Adaylar</a>
                <a className='text-decoration-none text-black my-2' href='/'>Fiyatlandırma</a>
                <a className='text-decoration-none text-black' href='/'>Partner</a>
            </div>
            <Dropdown className="mx-2 d-sm-block d-md-none my-2">
                <Dropdown.Toggle variant='secondary' className='w-100 p-2'>
                    Hizmet
                </Dropdown.Toggle>
                <Dropdown.Menu variant='dark' className='w-100'>
                    <Dropdown.Item href="#gizlilikPolitikasi"> Gizlilik Politikası </Dropdown.Item>
                    <Dropdown.Item href="#kullanimKosullari"> Kullanım Koşulları  </Dropdown.Item>
                    <Dropdown.Item href="#yardimMerkezi"> Yardım Merkezi </Dropdown.Item>
                    <Dropdown.Item href="#guncellemeler"> Güncellemeler </Dropdown.Item>
                    <Dropdown.Item href="#dokumentasyon"> Dökümantasyon </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className='d-flex flex-column flex-grow-1 col-sm-12 col-md-2 d-none d-sm-none d-md-flex'>
                <h6 className='fw-bold mb-4'>Destek</h6>
                <a className='text-decoration-none text-black' href='/'>Gizlilik Politikası</a>
                <a className='text-decoration-none text-black my-2' href='/'>Kullanım Koşulları</a>
                <a className='text-decoration-none text-black' href='/'>Yardım Merkezi</a>
                <a className='text-decoration-none text-black my-2' href='/'>Güncellemeler</a>
                <a className='text-decoration-none text-black' href='/'>Dökümantasyon</a>
            </div>
            <Dropdown className="mx-2 d-sm-block d-md-none my-2 mb-5">
                <Dropdown.Toggle variant='secondary' className='w-100 p-2'>
                    Bağlan
                </Dropdown.Toggle>
                <Dropdown.Menu variant='dark' className='w-100'>
                    <Dropdown.Item href="#/">
                        <div className='d-flex flex-row align-items-center mb-2 gap-1 gap'>
                            < AiFillLinkedin size={25} />
                            <a className='text-decoration-none text-white' href='/'> Linkedin</a>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/">
                        <div className='d-flex flex-row align-items-center  mb-2 gap-1 gap'>
                            < BsTwitter size={22} />
                            <a className='text-decoration-none  text-white' href='/'> Twitter</a>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/">
                        <div className='d-flex flex-row align-items-center  mb-2 gap-1 gap'>
                            < AiFillFacebook size={25} />
                            <a className='text-decoration-none text-white' href='/'> Facebook</a>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/">
                        <div className='d-flex flex-row align-items-center  mb-2 gap-1 gap'>
                            < AiOutlineInstagram size={25} />
                            <a className='text-decoration-none text-white' href='/'> Instagram</a>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/">
                        <div className='d-flex flex-row align-items-center  mb-2 gap-1 gap'>
                            < AiFillYoutube size={25} />
                            <a className='text-decoration-none text-white' href='/'> YouTube</a>
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className='d-flex flex-column flex-grow-1 col-sm-12 col-md-2 d-none d-sm-none d-md-flex'>
                <h6 className='fw-bold mb-4'>Bağlan</h6>
                <div className='d-flex flex-row align-items-center mb-2 gap-1 gap'>
                    < AiFillLinkedin size={25} />
                    <a className='text-decoration-none text-black' href='/'> Linkedin</a>
                </div>
                <div className='d-flex flex-row align-items-center  mb-2 gap-1 gap'>
                    < BsTwitter size={22} />
                    <a className='text-decoration-none text-black' href='/'> Twitter</a>
                </div>
                <div className='d-flex flex-row align-items-center  mb-2 gap-1 gap'>
                    < AiFillFacebook size={25} />
                    <a className='text-decoration-none text-black' href='/'> Facebook</a>
                </div>
                <div className='d-flex flex-row align-items-center  mb-2 gap-1 gap'>
                    < AiOutlineInstagram size={25} />
                    <a className='text-decoration-none text-black' href='/'> Instagram</a>
                </div>
                <div className='d-flex flex-row align-items-center  mb-2 gap-1 gap'>
                    < AiFillYoutube size={25} />
                    <a className='text-decoration-none text-black' href='/'> YouTube</a>
                </div>
            </div>
        </div>
    )
}

export default FooterBody
