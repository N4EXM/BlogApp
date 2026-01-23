<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bookmark extends Model
{
    
    protected $fillable = [
        'post_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    // relationships
    public function user() {
        return $this->hasMany(User::class);
    }

    public function post() {
        return $this->hasMany(Post::class);
    }

}
