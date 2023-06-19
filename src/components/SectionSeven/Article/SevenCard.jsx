import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Card, Col, Row } from 'react-bootstrap';

const SevenCard = () => {
    return (
        <Row >
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    }
                }}
            >
                <Col>
                    <SwiperSlide>
                        <Card style={{ width: "auto", height: "18rem", padding: "2rem 1rem", borderRadius: "1rem", margin: "2rem auto" }}>
                            <div className='d-flex '>
                                <Card.Img style={{
                                    width: "20%",
                                    borderRadius: "50%",
                                    alignItems: "center",

                                }}
                                    src='https://imageio.forbes.com/specials-images/imageserve/62d700cd6094d2c180f269b9/0x0.jpg?format=jpg&crop=959,959,x0,y0,safe&height=416&width=416&fit=bounds'
                                />
                                <div className='d-flex flex-row justify-content-between w-100 '>
                                    <div className='d-flex flex-column ms-4'>
                                        <h5>Elon Musk</h5>
                                        <p>Yatırımcı</p>
                                    </div>
                                    <div className='mt-2 me-3 '>
                                        <img src="https://personel.net/wp-content/themes/civi/assets/images/testimonial-icon.svg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <Card.Body>
                                <Card.Title className='fw-bold my-2'>"Güney Afrikadan Uzaya"</Card.Title>
                                <Card.Text>
                                    Bir şeyi yeterince isterseniz, başka bir yolunu bulursunuz. engel yoktur, sadece fırsatlar vardır.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                </Col>
                <Col >
                    <SwiperSlide>
                        <Card style={{ width: "auto", height: "18rem", padding: "2rem 1rem", borderRadius: "1rem", margin: "2rem auto" }}>
                            <div className='d-flex '>
                                <Card.Img style={{
                                    width: "20%",
                                    borderRadius: "50%",
                                    alignItems: "center",

                                }}
                                    src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRUVFRIYGBgVGBgYGBIREREREhISGBgaGRgUGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjQhISExMTQ0NDQ0NDExNDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALIBGwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAEDBQYCBwj/xAA+EAACAQIEAwUFBQYGAwEAAAABAgADEQQSITEFBkEiUWFxkRNygaGxByMyUsEkM0JisvA0c4KSotEU4fFT/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAlEQEBAAICAwABAwUAAAAAAAAAAQIRITEDEkEiE2GhBCMyUXH/2gAMAwEAAhEDEQA/ANbh6gMIlDh8RLLD4q8Sdi50JyjXkggNonp3g5QiHiMyXgZsNV0sZFiVN8wjWtJ0a+kmwSiMLWzCKukHCZTcQxWzCEX2FpPYyxRriV9RLGE4Z4GJjxR7QBLJVkayUCXjU5Rw8gqSd5BUmlqQdQwOqYZVMAxLWEVCj43iMqmUnCsLmOY9TJeO1szhRLbh9AIgJ7pNOBuNYz2dI26D5zz2hTJZmO5NzNJzBic7ZQdAdfOVNJAI9EEqrrIHTeH1U1nApbxaC04PVbJa8OxaEJrG5fwRMtuO4TLTPlJ6pyMaWkTvOXbeQVHl+xacvW0M2vIFVfYkk63MwLDQzV8ioSja9TM8rtXTeVeIsRlX1gZTqZIiACQVqvdF0m3YvBta8N9pAeFYR3JJFh47+k0KcOFhp84bXIxaDQzunVIkyU9Jz7OUyGYbFSyp1byhVbQuhXtAbXSztTBaFcGFobwU5ZLwYggyxVZHUpXgHCNcaySnpIMtpOhvFTlSutxIFbKZPTac1qXWEUJptcTuQYYwrLEZlk0Bx2Pp0Ez1aioo0zOwUE9AO8zGcwc8XoO2HZe641cKT+LuGmuo2lQq1HEOPUKbZDUQt1XOLjwt3+EBxHM+HC5vaX7wNSCNx5+E8KxvE3qvneoWI0G+g7vpBjiWHU2O4vYnul3JPq90w3MFKqbA2vsWK2YetwdvWNjq4AOs8NbiFQEH2jWFjZWI8hfeaXhXMF0yvcH8xJNwR18bxex+rRUk9pVv0vD+N43IlhvawldwvHILm4I0uwJNr21tbbWQ8VfO3gPrCcleFFVrWGu8Hw1Yl7TvGprIsCnbjtJbGnHSjvClTaSIo1jkKtLyxhuyNIVzXStRbyhHK6XQSXm1R7B/KZXtc6eQvuZEywl11M4ZIwEy7zS8jvlVx4mUITebP7OeGh1diP4iIqNL+hQd9hp3y6wXBwNSLnvMtcNhAoFhC1SRacx0gw+GC7CE5Y6iSWi0rbFUKQywKstpJQrHLtA8XX0mrC10rXkgWBYOpcy3VRBO0CVCIdRxcHeh3Tn2JEDlXlCsCJLmlHRqlZZ4eteCtiHW8HDFTCpEyXgZw19oWguIAoIMMDECKQ5SC2MkxuLWlTao7BVQXJO06p9rpMx9oJAw5BOqjOqFgBUsQCBfc6iNW3nnNnHBUxIZ6hdO1lQEdjUgWHjpr4TE4rFubKWsFzDTS4a179+31i4jVu+22gF7nQx8Jw2o5FlNj37CK2Ts5jcuIDOYdfSxGk7VrnW9u7wJAmmXlYWFz6SZOVRcWY+l7jumf62DT9DNlL6E7a+OgktKtmaw2JAub7TbUOVQdz0103keJ5Ltc02B/kYb/GL9bE/0MlTw/FEsURjYXA0uOvyv9Zo3RmQONgNdj2r67fCZrFcOq4Y9tbBtAQSR6jearlzFFlKhTlsQQbbkasTfbaazL7GeWPyqeul4sJRs15Y1sPa39+H6RUkAmmmSYtaQvXtec1Xg7DeGxpt+WOKKEA7hG5gxpdCOkoeAL0lxxGi2Qm0g9sS1PUxmSGMmpjGnHowSpvPQPsysEcfzmYtKe81v2f3GcfzScpwcekpOwIsPQNheEhB3SZjTtiJUM6yGTRStJ2wtHDdnaVvE8NYHSaWkgtaVvFqQymJnWcwC6y3AMr+Gr2peilBFR0WvCsgj4ejrJcRTsI9iBXw941BSDDsMRlnKAFjGradH0nS6zo0NJH+EwOVL7OG0kFoJTqAyyw6waRCiWaeS/a1xA/8AkFASPZoEsp0ZXCvcjzI9BPZ8k8I+1esXxlVMv4Qii3UZFOv990AyXL3D/bVSzDsr4bk7TcUcEqCwEreVcOEW1t7GX9VZy+S7ru8OOsUHsoTQp6iChzeG4a8ybimpWhVHCE9IxfQHa4A8b9YbRxIuAD9I5jE7oHiHCRURqbjRxa9tvETF8EomnWalUzBqb5SO1213B8BPUKjZrTH82YT2WPSqrELVp3IABGZCR9CBN/HNXTn813Nqvir2dtb3Y6/GV1KtdrQ3jY7Zt3/pAMCnbE6fbhx65E1aeonISG1qeojLSi0Gj5S4eCuYiX/G8KBSaw6GRcmYRjTBA07ztNFxHhmemyhtbG3de0nV2e48bdNTGKQyrTsxnBSapDpTmq5ATV/emeRJqOQF7VT3v0k5Tg5Xoy7CdTlNhOogUUUUAyiAwPi98hl0uHlfxqlZD5SdMazXBxdpplpzN8GsGmoDCOJrvDU9ZLiqekkwbCSYu1o7BKBw2DLLe9oKlMo5EtsFilC27oC7hnJhIq60NR9JzUsZ2F02+UDxHx9I7Cl5RAWYWPWaDB7CUVJdpoMKBaRprjU88X+2HABMXSrDaslmt+emQpv5qyf7Z7RPOvtNwArVMOpB1SpZvFSpAHrDKyTbTCW3UY7lcAozdb29BCOK8QSkCzsABsOpPgJX8uoyO6HYX0tse75yDimFHtGdlLsAMiaZVHeenfOeye3LrlvrNBhzXbVaROulwfUmH8L5zVmCumXxBvb4SvU1sy6ZQ34lsxyb/lYZht0B37oPjmIfJkBF+uUkjvsSSvlc2leuOuinvb3/AA9NoVVq0wya2YNp+U6frAsdzXhsO+RiWI0IVToeuu0flVgABawy2tbTymM46je2cph0BJJvlQs5J11JNvIyMdbaZTLTcUObsNUZVVyuY2GZTYE7C+0fnJM74azW+7Ymx1/GLH5GZnD8Op2piph1PtAL1KNN/uySB27KMp1B3I032vc4jCMhpo7ZyiKqud/Z53YAnyI+U1km+HPnb68qjiCX18ZDgKXbEssfR0E5wFHtCbycOa3lJXTURJTheJp6iKmmscg29H5bUDDUbD+AevWWkrOXT+z0vBbehlpJEeN4tO23mZCVh2PS1R/eP1gxWXAiprrNLyEO3V94SgpjWaHkVe3V8xDLoR6CmwnUYR5BlFFFAIUsYLxairU2uOhhNKkFsB0kXEhem4PcY/rOz8axXLGGDOb6zbjDL+UekzXKtEBies1sfScZKCNAA6CSVaQK2t3wiwj2itOYaA4LCgLtOf8Ax1DHSWEg0LQgynEjsILbSDE0xY6QsiDVaV4bFjPuSNthLHhGILG3QSwGFW2w9JMlMDYAeQk6XI7mf5xw+bDlgLshuvfc9k/WaCR1kzBh3gjXbUQym5peN1ZXjeHpgVLqLB1W9982Uf38JNisLmNrehtbx85PjcJURjmRl7VwHFsyjS4+MdHvmPkP1nLlK7sbyqa+ANvxN/uMBw2DQuRl8CxN2J8Za8UxaouUHtEf7R3yt4YEW4NQZiezmO/f8YaumntJdNTwBLOF8DDcdwlGObLZxsw09R1gvBgc662O14XzHQqAB6Z7aEMFH8S21Hx1ik4FvInDYTsgXJA6MBr6QfiyXqrpsEUeQQQ7gmPFemCO43HUECRY6xcH+Y+m038M5cn9R1pScUoWA85Fw2l2x5GWnFl7I84Jw1e2PjOmdOS9usdTsRI6a6w3iK6r8YMi6xRTe8vf4en5H6mWUq+XR+z0/j9TLSRROnlPFF+9f3j9TBCJYcXH3r+8fqYARNJ0DU95oeRT95V8xM+g1mh5GH3tX4frDLoo34jxhHmaiiiigABxHjKvjNZsh1O0gwdYlQSZFxeqcht3Tea25MploDy/X13mnOI/mnnnCsUyvbxl5jeIsALTWzGuXKZ/GuoVgevznWLxGVSbzD4Tibg/ih2OxzMpuekyuM9m+Pv66WNPit/4+vfLDhlYMTreeeVK4A3lry9xtVezHTvmuWM9bpE9pnP2ehzh7StbjNO11N/KCnime+XQCcmtO723xF8DHmJxnMb0zboDCDzKWQEMBpuN4ro5a18HxWJVFzN6dTM3heNsyk5yZiuYuaKn/kJTuSGZUBJsoZ2Cj6xbU0nOGNDtTsCMqk+Juf8A0Zlab2cjvsQPE3vNnx/hRemCmr0xoPzqN1855/UqdVGo791IOqsOhGsx8mN26fDlNKnimBf2lUkFtbgAAsVIBtqelvlIcPwR6yZ0uRc3vfMospKMASQRf5zUVTezGxJABJOpsNx3wB8qPmuVJ2dCRe+4uuoixt6aesvKXgtPGIFRFQldmq52cdxAvr4Xlg71EbLUqFnUB3Gft9q5uR0Hdtv4CG4LiBYjNi6gzWBCuVJPSxAv3bS8w2FQ3sCS/wCbVmGwJvr6x0XGf7/lVcqKUWtU1yuSyhtD0B9bXhrPfL5xscciCmPifAHT5yGltNvDjZN365PNnvLU+Gx73EgwZswPnHrm8jBtN5OGOxWKe5EjQazhHvJU3ihtvy8fuE/1f1GWcquXf3C+bfUy1md7VOnl/F/3z+831MBMN4p++qe+/wDUYGZpOgZN5f8AI/76r/p/WUCby+5H/f1fJf1iy6KPQBHjR5moooooBj8E3YE54gwyaxuGqcg8pzxVewfKaTtjl0zlKoufSE4+poJS4Z/vAPEw/itXKoM6ONubd04SobjzhOPqMFNu6VOGr5mHnNLiaIZD5Sb/AJcNMd+vLH4yqcu8rcJjzmNj1k3HHKKRaAcr0faVCD0l53U0MdXlueGYpjTv5wnl/GlkYn87D5wrB4EBLdJS4nj2EwwdTUDNcn2dLttc952HxM47LXTKC47xJczC+zWk/D6oCXvvMHxTjhqOzKgUEki5zH49JW1se7aGo1u7Mbem0nPxe0EekYrmylRRgDmbYIh1v4noJgMbxh6lZazfwurhV/CoRg1h6SsYxppjhMZwLX1DSqBlDDZgCPEEXmQ5t4Kyk4mgl2A+9pqNaij+MD84+Y07rE/Z9xE1sDQJN2RcjHrdDl+gE1ForjvgTK43cebcPxKV6fY1Zd++3fbv74PU4cwbKTdWIsLaqBvm09PCXfMXKDq5xODFnvmekugfvKj83h18967B8RzaVKTZhp2TbtXNwRYETnyx1eXXhlbNzkRwbAqjAZrkbaLpfToP7vNCa/8A46PiKh/DYIg/jdtEXbqfQAmA8Mp65jntqbEAaZr23lbzZizUxOBobLmd8g27IAzHvOpjx1bIeVurxpoMVhjVpK+7ot2/nTr8RvAKO0vOH3Vx4/TrMjzNxB8FiCjKGpVLvTYEBgt+0h8VJ9CJ149acWc/IVUOshqfhgeH4xSqHRrHubSF1T2Y0nwx0habwLB7Q1N4lNny0fuR4M31ltKjlr9yPeb6y3mN7VOnlnE2++q++/8AUYIYTxP99W/zH/qMFM1nQMu8v+SD+0VPJfqZn1OsveST+01PdH1MWXQeixRRTMyiiigGT4aOwPKccVHYPlG4e9kEh4rXGQzWdsL0w6H70eZk3H37AkV+2D4mc8efsDzm/rdspZpFwRCTc9821Bwy28JieEvYTS4CtrvL9ZEW2qzmLDIou7BR3sbCYdeKrh3Y0QCfzMDl8wOsP554n7SsUB7NMW02L/xH10+EyZF/76yPJn7fi08Pi9fyqz4jzBiK+j1WK/8A5qcif7Rv8ZVFowE7CzKR0OF1NhGy9oD4+k6dbEN3b+RhJAPT/v1jkPYVljFYQaZ8/r/7jOkNDb0n7HcZpiKJOzK48mGU/NR6z1Ii288Q+yrE5Meik6VkdPC9s6n1QD4z3pqAIk3URe1cpub306dwElbh9J9XpqS38eUB/wDcNTOqmFy6r8V6H/ozpNbW/wDkMpMpoY243cUWKpCkWS+g2Peu4mUwdJq2P9sw7FJCid2ZiLzSc1ko2Y7Mgt4kXuPmITw7AAUkBFv4ieuY7n9PhObx4azv7OzPP+3LfqXFYlKCNVY6IuY3IFzsEB/mJAHnPGOaOIVcVWz1Dt2URdEppe+VR9T1nueM4QtXC1qTamqjAHqGt2CPEEAzwqqc6K9rG1mB3DdZ2eOS7cmV5B0SVvb+7Szw/EnC3Vjdf4Sbqw7pWjQzrD6G0uwnoHBcUtSmrrs3TqD1BlmpmM5JxNnrUr6A51+hmxBmVmjbTlcfcA97N9ZcSn5Xe9ADuZh87y4mN7XOnlHFD9/W/wAx/wCowYmEcUP39f8AzH/qMFJl49FSU6y85KP7S/uj6ygU6y85MP7U/ufrDLo3pUUUUzMooooB5pg+I2S/dK7HcRz6AxuHYQmmb9ZDjkFNbzpx1tx5XKwOq6gwfjdRckEXiatoDK3ieIzdZtLNspjaKwWJtLduJ+zR3G6qbe9sPmRMdSxFjaTcUxRKKo2Jufht9YvJW3jx+KfEuSTc3J3PeesgU6zus15FfWYOhMwsT6+v9mOIz6qD3Gx+P/z5xlaUEmW4tFh20t1Gh+EdDGGj+99Rp/1GE4kdQSVRGcSid8CxZo4ilVBtkdGv4KwJ+V59P0mDC4nysg7U+keVMV7TC4epfVqSZvfAyt8wZjnOAvMt94O1Eqcyi/evf5QkGJjM5TsZ7j+AFcUgD+Gor271F8yn5H4S1wuH012jIMznwEOErK667GO7NXqGC2Fh0ngnMODFHGYqgPwly6eAft2/5EfCe+zx77VsD7LF0sQBpVXKx/nT/wBER+K6yGUYR0sZ3SHaHjJsUmt+/WRINj3GdOkDOVrrjHHgQfS8315i+CUrYwv0ZA3qMv1E2QaY5dqracpn7k+8ZeGZjlCocrD+YzSVmspPhMMpqrleT8TqZq9c99R/6jB2MavUzVKh73c/8jOCZpOgdTrLrkw/tbe5+sogdZd8mn9sPuH6iLLoPUIo0eZmUUUUA8zwGJHsr+H6TOcxY4FCIycSAot4f9TMY7Fl5vO2HxVrUIa4PWSPVJnK4YnaOKZG4lBJQS5nXEmyjL1t9f8A5LLgiKagDbWO8o+JYnO7sNmY290aL8rR5ZbmhjOQLmc3ieISGwinqrL3jTzGo+kGR7yWi2sG2Zh3E+nSO1I1GnVYaZvym/w2Pyg9NoYuot8I5yEitpH6QfDnS3VTY/36QktpLhUIPxT3T7LsXnwSp1p1HT4Gzg/8z6TwypvPV/sZxQviEJ/hRwPIlWPzWRl1RXqqd06YaSOkd5Kx0mF7OdA8ILOfEfqIbBaS2YHvB/SFGGXNE6KY77T+G+2wNRgO1QK1F77KbP8A8SfSbGQY3DipTemwuHVlI8GBH6xY3V2d6fOefMinunKd3936RkplGqUm3puyG/erFf0nHjO5mvuDj7yi3erKT7pB/WabNrMty/UZ6opU6bOwDOWW2WkgHaZidADb1mkz6zHLs613KL6N7002J/A3lMdylVsWHjNXiqnYbymeU5OdPIqh7dT33/qMYtInft1Pff8AqMctGbsHWXPJp/bP9B+olDm1l1ya37aPcP1EnJT1ePGEeZmUUUUA+eG/dP8AH6CUqRRTf6w+CsLvHxW8UUv4STDaE2/K23umZh9hFFJqsURjiKKJZ+okNX8R8h9I8UL0EtPcQtP79RHilYiuE/G3+n9YSdoopcKh6u89B+yL/FP/AJD/ANaRRRX6Ve1UY9XaKKc31XxyN1+P0kxiiiox6MI5iigp888wf4/Gf5h+gla+8UU7cOmL1Hlekq8JdlUKzk5mUBWftW7RG+mmsp23iimP2/8AVfGg5U3bzmtxf4G8oopJx4634399vqZ1FFAzdZdcmf41fcP6RooqHrYjxRTJZRRRQD//2Q=='
                                />
                                <div className='d-flex flex-row justify-content-between w-100 '>
                                    <div className='d-flex flex-column ms-4'>
                                        <h5>Hamdi Ulukaya</h5>
                                        <p>İş İnsanı</p>
                                    </div>
                                    <div className='mt-2 me-3 '>
                                        <img src="https://personel.net/wp-content/themes/civi/assets/images/testimonial-icon.svg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <Card.Body>
                                <Card.Title className='fw-bold my-2'>"ABD'nin Yoğurt Kralı"</Card.Title>
                                <Card.Text>
                                    Başarılı bir kariyer için gerekli olan şeyler; tutku, azim, kararlılık, sabır ve kendinize olan güvendir.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                </Col>
                <Col >
                    <SwiperSlide>
                        <Card style={{ width: "auto", height: "18rem", padding: "2rem 1rem", borderRadius: "1rem", margin: "2rem auto" }}>
                            <div className='d-flex '>
                                <Card.Img style={{
                                    width: "20%",
                                    borderRadius: "50%",
                                    alignItems: "center",

                                }}
                                    src='https://haberfirsat.com/images/haberler/2021/08/demet_mutlu_kimdir_kac_yasinda_nereli_trendyol_kurucusu_ve_turkiye_nin_ilk_decacorn_unun_sahibi_h192975_95771.png'
                                />
                                <div className='d-flex flex-row justify-content-between w-100 '>
                                    <div className='d-flex flex-column ms-4'>
                                        <h5>Demet Mutlu</h5>
                                        <p>İş İnsanı</p>
                                    </div>
                                    <div className='mt-2 me-3 '>
                                        <img src="https://personel.net/wp-content/themes/civi/assets/images/testimonial-icon.svg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <Card.Body>
                                <Card.Title className='fw-bold my-2'>"Güney Afrikadan Uzaya"</Card.Title>
                                <Card.Text>
                                    Bir şeyi yeterince isterseniz, başka bir yolunu bulursunuz. engel yoktur, sadece fırsatlar vardır.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                </Col>
                <Col>
                    <SwiperSlide>
                        <Card style={{ width: "auto", height: "18rem", padding: "2rem 1rem", borderRadius: "1rem", margin: "2rem auto" }}>
                            <div className='d-flex '>
                                <Card.Img style={{
                                    width: "20%",
                                    borderRadius: "50%",
                                    alignItems: "center",

                                }}
                                    src='https://imageio.forbes.com/specials-images/imageserve/60f714955c5301b91863132f/0x0.jpg?format=jpg&crop=1113,1112,x1602,y788,safe&height=416&width=416&fit=bounds'
                                />
                                <div className='d-flex flex-row justify-content-between w-100 '>
                                    <div className='d-flex flex-column ms-4'>
                                        <h5>Indra Nooyi</h5>
                                        <p>CEO</p>
                                    </div>
                                    <div className='mt-2 me-3 '>
                                        <img src="https://personel.net/wp-content/themes/civi/assets/images/testimonial-icon.svg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <Card.Body>
                                <Card.Title className='fw-bold my-2'>"Dünyanın En Güçlü Kadını"</Card.Title>
                                <Card.Text>
                                    Liderlik, önce doğru soruları sormakla başlar. Eğer doğru soruları sorarsanız, doğru yanıtlarıda bulabilirsiniz.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                </Col>
            </Swiper>
        </Row>
    )
}

export default SevenCard;
