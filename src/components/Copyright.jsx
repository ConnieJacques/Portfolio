export function Copyright() {
    const year = new Date().getFullYear()

    return (
        <p className="h-[10dvh] flex flex-row justify-center border-t border-dark-green font-railway text-dark-green text-end text-sm flex flex-column items-center">© Connie Jacques {year}. All rights reserved </p>
    )
}