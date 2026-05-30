function ModalForm({

    title,

    children,

    isOpen,

    onClose

}) {

    if (!isOpen)
        return null;

    return (

        <div
            className="modal"
        >

            <div
                className="modal-body"
            >

                <h2>
                    {title}
                </h2>

                {children}

                <button
                    onClick={
                        onClose
                    }
                >
                    Cerrar
                </button>

            </div>

        </div>
    );
}

export default ModalForm;