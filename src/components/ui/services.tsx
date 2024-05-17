export function Services(){
  return(
    <section className="py-12 bg-black sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="title-section">Nossos <span className="text-gradient">serviços</span></h2>
            <p className="mt-4 text-base text-gray-400 sm:text-lg">Investir em serviços de marketing digital tornou-se uma necessidade para qualquer empresa que deseje.</p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-2 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-14 ">
                {/* <svg className="mx-auto" width="40" height="40" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg> */}

                <svg className="mx-auto" width="40" height="40" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0004 24.3501C21.3141 24.3501 24.0004 21.6638 24.0004 18.3501C24.0004 15.0364 21.3141 12.3501 18.0004 12.3501C14.6867 12.3501 12.0004 15.0364 12.0004 18.3501C12.0004 21.6638 14.6867 24.3501 18.0004 24.3501Z" stroke="url(#paint0_linear_2_328)" stroke-width="3.00312" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.0004 12.3499V19.8499C24.0004 21.0434 24.4745 22.188 25.3184 23.0319C26.1623 23.8758 27.3069 24.3499 28.5004 24.3499C29.6939 24.3499 30.8385 23.8758 31.6824 23.0319C32.5263 22.188 33.0004 21.0434 33.0004 19.8499V18.3499C33.0002 14.9644 31.8548 11.6786 29.7503 9.0267C27.6459 6.37478 24.7062 4.51274 21.4094 3.74335C18.1125 2.97395 14.6523 3.34246 11.5914 4.78895C8.53055 6.23544 6.04901 8.67483 4.5503 11.7105C3.05159 14.7461 2.62386 18.1995 3.33666 21.5091C4.04947 24.8186 5.86088 27.7898 8.47636 29.9393C11.0918 32.0889 14.3576 33.2904 17.7425 33.3486C21.1275 33.4068 24.4326 32.3183 27.1204 30.2599" stroke="url(#paint1_linear_2_328)" stroke-width="3.00312" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_2_328" x1="23.1433" y1="13.441" x2="13.0913" y2="23.5709" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7205"/>
                    <stop offset="1" stop-color="#FFA122"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2_328" x1="30.8576" y1="6.07811" x2="5.72767" y2="31.4028" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7205"/>
                    <stop offset="1" stop-color="#FFA122"/>
                    </linearGradient>
                    </defs>
                </svg>

                <h3 className="mt-12 text-xl sm:text-2xl font-bold text-white font-pj">Redes sociais</h3>
                <p className="mt-5 text-base text-gray-400 sm:text-lg">Gerenciamento, planejamento, criação de artes, conteúdo estratégico, interação com seguidores, gestão e análise de métricas.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-400/25">
                {/* <svg className="mx-auto" width="40" height="40" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 27H19V45H27V27Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 37H1V45H9V37Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M45 17H37V45H45V17Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5 17L15 7L23 15L37 1" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M28 1H37V10" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg> */}

                <svg className="mx-auto" width="40" height="40" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0002 33.6172C26.2845 33.6172 33.0002 26.9015 33.0002 18.6172C33.0002 10.3329 26.2845 3.61719 18.0002 3.61719C9.71591 3.61719 3.00018 10.3329 3.00018 18.6172C3.00018 26.9015 9.71591 33.6172 18.0002 33.6172Z" stroke="url(#paint0_linear_2_417)" stroke-width="3.00312" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.00018 18.6172H33.0002" stroke="url(#paint1_linear_2_417)" stroke-width="3.00312" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.0002 3.61719C21.7521 7.72472 23.8843 13.0552 24.0002 18.6172C23.8843 24.1791 21.7521 29.5097 18.0002 33.6172C14.2483 29.5097 12.1161 24.1791 12.0002 18.6172C12.1161 13.0552 14.2483 7.72472 18.0002 3.61719V3.61719Z" stroke="url(#paint2_linear_2_417)" stroke-width="3.00312" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_2_417" x1="30.8573" y1="6.34446" x2="5.72745" y2="31.6691" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7205"/>
                    <stop offset="1" stop-color="#FFA122"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2_417" x1="30.8573" y1="18.7081" x2="30.802" y2="20.3816" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7205"/>
                    <stop offset="1" stop-color="#FFA122"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_2_417" x1="23.143" y1="6.34446" x2="5.71464" y2="13.3699" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7205"/>
                    <stop offset="1" stop-color="#FFA122"/>
                    </linearGradient>
                    </defs>
                </svg>

                <h3 className="mt-12 text-xl sm:text-2xl font-bold text-white font-pj">Tráfego pago</h3>
                <p className="mt-5 text-base text-gray-400 sm:text-lg">Criação de campanhas nas plataformas de anúncios, otimização e análise de resultados.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-400/25">
                {/* <svg className="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41 1H1V41H41V1Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 7H7V20H18V7Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 26H7V35H18V26Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M35 7H24V35H35V7Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg> */}

                <svg className="mx-auto" width="42" height="42" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0002 28.5L28.5002 18L33.0002 22.5L22.5002 33L18.0002 28.5Z" stroke="url(#paint0_linear_2_442)" stroke-width="3.00312" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27.0002 19.5L24.7502 8.25L3.0002 3L8.2502 24.75L19.5002 27L27.0002 19.5Z" stroke="url(#paint1_linear_2_442)" stroke-width="3.00312" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.0002 3L14.3792 14.379" stroke="url(#paint2_linear_2_442)" stroke-width="3.00312" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.5002 19.5C18.1571 19.5 19.5002 18.1569 19.5002 16.5C19.5002 14.8431 18.1571 13.5 16.5002 13.5C14.8433 13.5 13.5002 14.8431 13.5002 16.5C13.5002 18.1569 14.8433 19.5 16.5002 19.5Z" stroke="url(#paint3_linear_2_442)" stroke-width="3.00312" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_2_442" x1="31.9288" y1="19.3636" x2="19.3638" y2="32.026" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7205"/>
                    <stop offset="1" stop-color="#FFA122"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2_442" x1="25.2859" y1="5.18182" x2="5.18202" y2="25.4416" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7205"/>
                    <stop offset="1" stop-color="#FFA122"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_2_442" x1="13.5664" y1="4.03446" x2="4.03465" y2="13.6401" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7205"/>
                    <stop offset="1" stop-color="#FFA122"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_2_442" x1="19.0716" y1="14.0455" x2="14.0457" y2="19.1104" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7205"/>
                    <stop offset="1" stop-color="#FFA122"/>
                    </linearGradient>
                    </defs>
                </svg>

                <h3 className="mt-12 text-xl sm:text-2xl font-bold text-white font-pj">Design</h3>
                <p className="mt-5 text-base text-gray-400 sm:text-lg">Desenvolvimento de identidade visual, criação de artes para as redes sociais e sites.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-l md:border-gray-400/25">
                {/* <svg className="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.66667 25H6C3.23858 25 1 27.2386 1 30V37C1 39.7614 3.23858 42 6 42H36C38.7614 42 41 39.7614 41 37V30C41 27.2386 38.7614 25 36 25H31.8333C30.2685 25 29 26.2685 29 27.8333C29 29.3981 27.7315 30.6667 26.1667 30.6667H15.3333C13.7685 30.6667 12.5 29.3981 12.5 27.8333C12.5 26.2685 11.2315 25 9.66667 25Z"
                        fill="#D4D4D8"
                    />
                    <path d="M9 9H33" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 17H33" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 25H13V31H29V25H41" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M37 1H5C2.79086 1 1 2.79086 1 5V37C1 39.2091 2.79086 41 5 41H37C39.2091 41 41 39.2091 41 37V5C41 2.79086 39.2091 1 37 1Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg> */}

                <svg className="mx-auto" width="42" height="42" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.0004 4.5H6.0004C4.34354 4.5 3.0004 5.84315 3.0004 7.5V22.5C3.0004 24.1569 4.34354 25.5 6.0004 25.5H30.0004C31.6573 25.5 33.0004 24.1569 33.0004 22.5V7.5C33.0004 5.84315 31.6573 4.5 30.0004 4.5Z" stroke="url(#paint0_linear_2_438)" stroke-width="3.00312" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.0004 31.5H24.0004" stroke="url(#paint1_linear_2_438)" stroke-width="3.00312" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.0004 25.5V31.5" stroke="url(#paint2_linear_2_438)" stroke-width="3.00312" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_2_438" x1="30.8575" y1="6.40909" x2="14.3727" y2="30.1414" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7205"/>
                    <stop offset="1" stop-color="#FFA122"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2_438" x1="23.1433" y1="31.5909" x2="23.0057" y2="33.2549" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7205"/>
                    <stop offset="1" stop-color="#FFA122"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_2_438" x1="18.929" y1="26.0455" x2="17.2869" y2="26.3212" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7205"/>
                    <stop offset="1" stop-color="#FFA122"/>
                    </linearGradient>
                    </defs>
                </svg>


                
                <h3 className="mt-12 text-xl sm:text-2xl font-bold text-white font-pj">Sites</h3>
                <p className="mt-5 text-base text-gray-400 sm:text-lg">Criação de layout personalizado, design responsivo, integração com as redes sociais e com o WhatsApp.</p>
            </div>

        </div>
    </div>
</section>

  )
}