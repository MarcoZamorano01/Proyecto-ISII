class HistoryObserver {

    update(result) {

        const history =
            JSON.parse(
                localStorage.getItem(
                    "resultsHistory"
                )
            ) || [];

        history.push(result);

        localStorage.setItem(
            "resultsHistory",
            JSON.stringify(history)
        );
    }
}

export default HistoryObserver;