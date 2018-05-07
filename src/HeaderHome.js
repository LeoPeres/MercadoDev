import React from 'react'
import logo from './logo.png'


const HeaderHome = (props) => {
    return (
        <div>
            <div className='top_bar'>
                <div className='container'>
                    <div className='row'>
                        <div className='col d-flex flex-row'>
                            <div className='top_bar_contact_item'><div className='top_bar_icon'><img src='images/phone.png' alt='' /></div>+14 99661 4895</div>
                            <div className='top_bar_contact_item'><div className='top_bar_icon'><img src='images/mail.png' alt='' /></div><a href='mailto:fastsales@gmail.com'>leo_ps.12@hotmail.com</a></div>
                            <div className='top_bar_content ml-auto'>
                                <div className='top_bar_user'>
                                    <div className='user_icon'><img src='images/user.svg' alt='' /></div>
                                    <div><a href='/'>Register</a></div>
                                    <div><a href='/'>Sign in</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='header_main'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-2 col-sm-3 col-3 order-1'>
                            <div className='logo_container'>
                                <div className='logo'><a href='/'><img src={logo} alt='mercado dev' style={{ width: '120px' }} /></a></div>
                            </div>
                        </div>

                        <div className='col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right'>
                            <div className='header_search'>
                                <div className='header_search_content'>
                                    <div className='header_search_form_container'>
                                        <form action='/' className='header_search_form clearfix'>
                                            <input type='search' required='required' className='header_search_input' placeholder='Buscar...' />
                                            <button type='submit' className='header_search_button trans_300' value='Submit'><img src='images/search.png' alt='' /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right'>
                            <div className='wishlist_cart d-flex flex-row align-items-center justify-content-end'>
                                <div className='wishlist d-flex flex-row align-items-center justify-content-end'>
                                    <div className='wishlist_icon'><img src='images/heart.png' alt='' /></div>
                                    <div className='wishlist_content'>
                                        <div className='wishlist_text'><a href='/'>Favoritos</a></div>
                                        <div className='wishlist_count'>115</div>
                                    </div>
                                </div>


                                <div className='cart'>
                                    <div className='cart_container d-flex flex-row align-items-center justify-content-end'>
                                        <div className='cart_icon'>
                                            <img src='images/cart.png' alt='' />
                                            <div className='cart_count'><span>10</span></div>
                                        </div>
                                        <div className='cart_content'>
                                            <div className='cart_text'><a href='/'>Carrinho</a></div>
                                            <div className='cart_price'>R$85</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className='main_nav'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>

                            <div className='main_nav_content d-flex flex-row'>

                                <div className='cat_menu_container'>
                                    <div className='cat_menu_title d-flex flex-row align-items-center justify-content-start'>
                                        <div className='cat_burger'><span></span><span></span><span></span></div>
                                        <div className='cat_menu_text'>categorias</div>
                                    </div>

                                    <ul className='cat_menu'>
                                        {props.categorias.map((cat, indice) => {
                                            return (
                                                <li key={indice}>
                                                    <a href={`/categorias/${cat.url}`}>{cat.categoria}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='banner'>
                <div className='banner_background' style={{ backgroundImage: 'url(images/banner_background.jpg)' }}></div>
                <div className='container fill_height'>
                    <div className='row fill_height'>
                        <div className='banner_product_image'><img src='images/banner_product.png' alt='' /></div>
                        <div className='col-lg-5 offset-lg-4 fill_height'>
                            <div className='banner_content'>
                                <h1 className='banner_text'>Nova era dos smartphones</h1>
                                <div className='banner_price'><span>R$5,530</span>R$4,460</div>
                                <div className='banner_product_name'>Apple Iphone 6s</div>
                                <div className='button banner_button'><a href='/'>Comprar</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='characteristics'>
                <div className='container'>
                    <div className='row'>


                        <div className='col-lg-3 col-md-6 char_col'>

                            <div className='char_item d-flex flex-row align-items-center justify-content-start'>
                                <div className='char_icon'><img src='images/char_1.png' alt='' /></div>
                                <div className='char_content'>
                                    <div className='char_title'>Free Delivery</div>
                                    <div className='char_subtitle'>from $50</div>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-3 col-md-6 char_col'>

                            <div className='char_item d-flex flex-row align-items-center justify-content-start'>
                                <div className='char_icon'><img src='images/char_2.png' alt='' /></div>
                                <div className='char_content'>
                                    <div className='char_title'>Free Delivery</div>
                                    <div className='char_subtitle'>from $50</div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 char_col'>

                            <div className='char_item d-flex flex-row align-items-center justify-content-start'>
                                <div className='char_icon'><img src='images/char_3.png' alt='' /></div>
                                <div className='char_content'>
                                    <div className='char_title'>Free Delivery</div>
                                    <div className='char_subtitle'>from $50</div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 char_col'>

                            <div className='char_item d-flex flex-row align-items-center justify-content-start'>
                                <div className='char_icon'><img src='images/char_4.png' alt='' /></div>
                                <div className='char_content'>
                                    <div className='char_title'>Free Delivery</div>
                                    <div className='char_subtitle'>from $50</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeaderHome