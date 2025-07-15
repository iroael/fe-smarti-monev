<template>
    <CommonCard1 colClass="xl-50 col-xl-6 col-lg-12" :headerTop="false" title="Cryptocurrency Prices">
        <div class="chart-container crypto-chart">
            <div class="row">
                <div class="col-12">
                    <div id="chart-crypto">
                        <CommonChartsChartCrypto />
                    </div>
                </div>
            </div>
        </div>
    </CommonCard1>
    <CommonCard1 colClass="xl-50 col-xl-6 col-lg-12" title="Crypto Annotations" :headerTop="false">
        <div class="chart-container">
            <div class="row">
                <div class="col-12">
                    <div id="crypto-annotation">
                        <CommonChartsCryptoAnnotation />
                    </div>
                </div>
            </div>
        </div>
    </CommonCard1>
    <div class="col-sm-12 box-col-12">
        <div class="donut-chart-widget">
            <div class="card">
                <div class="card-header">
                    <h2>Stock Market</h2>
                </div>
                <div class="card-body">
                    <div id="chart-widget13">
                        <CommonChartsChartWidget13 />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <CommonCard1 colClass="col-xl-5 col-lg-12 box-col-12" title="Finance" :headerTop="false">
        <div class="chart-container column-container">
            <div id="linechart">
                <CommonChartsFinanceChart />
            </div>
        </div>
    </CommonCard1>
    <CommonCard1 colClass="col-xl-7 col-lg-12 box-col-12" title="Order Status" :headerTop="false">
        <div class="chart-container">
            <div id="linechart">
                <CommonChartsOrderStatus />
            </div>
        </div>
    </CommonCard1>
    <CommonCard1 colClass="xl-50 col-xl-5 col-lg-12 box-col-6" title="Monthly Sales" :dropdown="false">
        <div class="chart-container">
            <div id="linechart">
                <CommonChartsMonthlySales />
            </div>
        </div>
    </CommonCard1>
    <CommonCard1 colClass="xl-50 col-xl-7 col-lg-12 box-col-6" title="Uses" :header="true">
        <div class="chart-container">
            <div id="linechart">
                <CommonChartsUsesChart />
            </div>
        </div>
    </CommonCard1>
</template>
