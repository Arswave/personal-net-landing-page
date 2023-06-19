import { TbMailbox } from 'react-icons/tb';
import { Button } from 'react-bootstrap';

const FooterHead = () => {
    return (
        <div className='container row w-100'>
            <div className='col-md d-flex align-items-center justify-content-center '>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#007456',
                    color: 'white',
                    width: '90px',
                    height: '90px',
                    fontSize: '50px',
                    borderRadius: '50%',
                    margin: '20px 20px',
                }}>
                    <TbMailbox />
                </div>
                <div className='d-flex flex-column me-2 my-4 w-100'>
                    <h2 className='fw-bold fs-2'>İş bütlenimize abone olun</h2>
                    <h5>Sizi en iyi yeni işlerle güncel tutacağız.</h5>
                </div>
            </div>
            <div className='col-md'>
                <div className='row d-flex align-items-center justify-content-center'>
                    <div className='col-sm-12 col-xl-8 my-3'>
                        <input style={{
                            width: '100%',
                            lineHeight: '50px',
                            borderRadius: '15px',
                            outline: 'none',
                        }} type="email" name="email" placeholder='    E-postanızı girin' />
                    </div>
                    <div className='col-sm-12 col-xl-4'>
                        <Button variant='success' size='lg'
                            style={{
                                width: '100%',
                                borderRadius: '15px',
                                lineHeight: '40px',
                                outline: 'none',
                            }}>Abone Ol</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterHead
