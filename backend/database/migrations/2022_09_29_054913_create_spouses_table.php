<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Membership;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('spouses', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Membership::class);
            $table->string('spouseFname')->nullable();
            $table->string('spouseAge')->nullable();
            $table->string('spouseOcc')->nullable();
            $table->string('spouseMI')->nullable();
            $table->string('spouseEmplrName')->nullable();
            $table->string('spouseConNum')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('spouses');
    }
};
