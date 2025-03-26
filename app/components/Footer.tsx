const Footer = () => {
    return (
        <section className='flex flex-col py-16 gap-8'>
        <div className='flex flex-row justify-between py-16 border-b'>
            <div className='space-y-2'>
                <h3 className='text-xl font-semibold'>ParChat</h3>
                <h2 className='text-4xl font-bold whitespace-pre-line'>Comunica, Conecta y Transmite</h2>
            </div>
            <div className='flex flex-row space-x-32 px-4'>
                <div className='space-y-6 text-center'>
                    <h3 className='font-semibold'>Stacks</h3>
                    <ul className='space-y-4'>
                        <li>Sobre Nosotros</li>
                        <li>Otros Proyectos</li>
                        <li>GitHub</li>
                    </ul>
                </div>
                <div className='space-y-6 text-center'>
                    <h3 className='font-semibold'>Info</h3>
                    <ul className='space-y-4'>
                        <li>Información</li>
                        <li>Salas</li>
                        <li>Registro</li>
                    </ul>
                </div>
                <div className='space-y-6 text-center'>
                    <h3 className='font-semibold'>Contacto</h3>
                    <ul className='space-y-4'>
                        <li>Tuluá, Valle</li>
                        <li>Colombia</li>
                        <li>3000000000</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex flex-row justify-between px-16 text-[14px] text-babyblue'>
            <p>© 2025 ParChat. Todos los derechos reservados.</p>
            <p>Hecho con amor por el equipo de Ripp</p>
        </div>
        </section>
        );
    }
        
    export default Footer;