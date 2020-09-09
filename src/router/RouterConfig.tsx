import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import LoadingContainer from '@src/containers/Loading';
import LazyLoading from '@src/components/LazyLoading';
import Default from '@src/view/Default';
import Page1Data from '@src/containers/Page1Data';
import Page2Data from '@src/containers/Page2Data';
import Page3Data from '@src/containers/Page3Data';
import Page1 from '@src/view/Page1';

const router1 = 'Page1';
const router2 = 'Page2';

/**
 * 路由
 */
function RouterConfig() {
    return (
        <>
            <Route path="/" exact={true} component={Default} />
            <Route
                path="/page1"
                render={() => (
                    <LoadingContainer.Provider>
                        <Page1Data.Provider>
                            <Page1 />
                        </Page1Data.Provider>
                    </LoadingContainer.Provider>
                )}
            />
            <Route
                path="/page2"
                render={() => {
                    const NextView = lazy(() => import('../view/Page2'));
                    return (
                        <Suspense fallback={<LazyLoading />}>
                            <Page2Data.Provider>
                                <NextView />
                            </Page2Data.Provider>
                        </Suspense>
                    );
                }}
            />
            <Route
                path="/page3"
                render={() => {
                    const NextView = lazy(() => import('../view/Page3'));
                    return (
                        <Suspense fallback={<LazyLoading />}>
                            <Page3Data.Provider>
                                <NextView />
                            </Page3Data.Provider>
                        </Suspense>
                    );
                }}
            />
        </>
    );
}

export { RouterConfig };
