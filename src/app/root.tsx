import React, {Suspense} from 'react';
import AppRouter from "@app/common/appRouter"

function App() {
    return (
        <div className="app-wrapper">
            <Suspense fallback={<p>Error</p>}>
                <AppRouter>
                </AppRouter>
            </Suspense>
        </div>
    );
}

export default App;
