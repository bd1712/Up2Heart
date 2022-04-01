import './ModalAlakel.scss';

function ModalAlakel({ active, setActive, children, props }) {
    return (
        <>
            <div className={active ? 'Modal active' : 'Modal'} onClick={() => setActive(false)}>
                <div className='ModalAlakel__Inner' onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default ModalAlakel