
export function closePopupHandler(e): void {
    const popup = document.getElementById("singleMoviePopup") as HTMLDivElement;

    if(e.target === popup) {
        popup.style.display = "none";
    }
}