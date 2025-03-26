import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex justify-between items-center  py-6 font-semibold text-white text-[14px]">
            <Image src="/w-logo.png" alt="ParChat Logo" width={160} height={20} className="" />
            <div className='flex'>
                <ul className='flex space-x-12'>
                    <li>Información</li>
                    <li>Salas</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div className='flex space-x-8 items-center'>
                <button className='bg-purple rounded p-2'>Parchemos</button> 
                <p> Entrar como Invitado</p> 
            </div>
    </header>
    );
}

export default Header;