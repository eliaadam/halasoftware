<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/products', function () {
    return Inertia::render('products');
})->name('products');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/contacts', function () {
    return Inertia::render('contacts');
})->name('contacts');

Route::get('/company', function () {
    return Inertia::render('company');
})->name('company');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
