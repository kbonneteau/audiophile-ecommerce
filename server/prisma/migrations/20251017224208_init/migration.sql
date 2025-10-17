-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "new" BOOLEAN NOT NULL DEFAULT false,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "image" JSONB NOT NULL,
    "categoryImage" JSONB NOT NULL,
    "gallery" JSONB NOT NULL,
    "includes" JSONB NOT NULL,
    "others" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carts" (
    "id" SERIAL NOT NULL,
    "cartId" TEXT NOT NULL,
    "user" TEXT NOT NULL DEFAULT 'guest',
    "taxRate" DOUBLE PRECISION NOT NULL DEFAULT 0.2,
    "shippingMethod" TEXT NOT NULL DEFAULT 'standard',
    "cartItems" JSONB NOT NULL DEFAULT '[]',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "carts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_slug_key" ON "products"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "carts_cartId_key" ON "carts"("cartId");
