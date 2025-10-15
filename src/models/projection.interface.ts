export interface ProjectionData {
    ok: boolean;
    message: string;
    data: Projection[];
    error: null;
}

export interface Projection {
    id: number;
    vertical: Vertical;
    area: Area;
    initiative: Initiative;
    service: Service;
    date: Date;
    proyected_spend: string;
    max_spend: string;
    min_spend: string;
}

export enum Area {
    Advertisement = "Advertisement",
    BankAccount = "Bank account",
    Delivery = "Delivery",
    Deposits = "Deposits",
    Lending = "Lending",
    Platform = "Platform",
    Pocket = "Pocket",
    Promotion = "Promotion",
    Services = "Services",
    Transfers = "Transfers",
}

export enum Initiative {
    AdTargeting = "Ad Targeting",
    CheckoutRevamp = "Checkout Revamp",
    CrossBorderExpansion = "CrossBorder Expansion",
    FraudShield = "Fraud Shield",
    LendingScoring = "Lending Scoring",
    LogisticsOptimization = "Logistics Optimization",
    PocketGrowth = "Pocket Growth",
    SearchRelevance = "Search Relevance",
    SellerOnboarding20 = "Seller Onboarding 2.0",
    ShippingAutomation = "Shipping Automation",
}

export enum Service {
    AWSLambda = "AWS Lambda",
    AWSRedshift = "AWS Redshift",
    AwsEc2 = "AWS EC2",
    AwsS3 = "AWS S3",
    AzureDataLake = "Azure Data Lake",
    Databricks = "Databricks",
    GCPBigQuery = "GCP BigQuery",
    GCPCloudRun = "GCP Cloud Run",
    GCPCloudStorage = "GCP Cloud Storage",
    KubernetesGKE = "Kubernetes (GKE)",
}

export enum Vertical {
    Fintech = "Fintech",
    Retail = "Retail",
}
