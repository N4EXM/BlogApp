<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    
    protected $fillable = [
        'post_id',
        'content',
        'date'
    ];

    protected $hidden = [
        ''
    ];

    protected $casts = [
        'content' => 'text',
    ];

    public function post() {
        $this->belongsTo(Post::class);
    }

}
