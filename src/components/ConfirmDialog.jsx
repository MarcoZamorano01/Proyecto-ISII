function ConfirmDialog({

    isOpen,

    onConfirm,

    onCancel

}) {

    if (!isOpen)
        return null;

    return (

        <div>

            <h3>
                ¿Eliminar?
            </h3>

            <button
                onClick={
                    onConfirm
                }
            >
                Sí
            </button>

            <button
                onClick={
                    onCancel
                }
            >
                No
            </button>

        </div>
    );
}

export default ConfirmDialog;