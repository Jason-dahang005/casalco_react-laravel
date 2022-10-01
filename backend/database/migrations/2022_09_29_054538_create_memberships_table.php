<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('memberships', function (Blueprint $table) {
            $table->id();
            $table->string('Fname');
            $table->string('Mname');
            $table->string('Lname');
            $table->string('suffix')->nullable();
            $table->string('gender');
            $table->date('dob');
            $table->string('Bplace');
            $table->text('address');
            $table->string('unit');
            $table->string('occupation');
            $table->string('educ');
            $table->string('MI');
            $table->string('civilStatus');
            $table->string('religion');
            $table->string('contactNum');
            $table->string('email');
            $table->string('NumDependents');
            $table->integer('is_approved')->default(0)->comment('0 = pending, 1 = pre-approved, 2 = approved');
            $table->text('mother');
            // $table->integer('membership_type')->comment('0 = online, 1 = walk-in');
            // $table->string('TIN');
            // $table->string('SSSnum');
            $table->string('acc_id')->unique()->nullable();
            $table->string('or_no')->nullable();
            // $table->string('assigned_officer')->nullable();
            $table->timestamps();
            // $table->string('selfiepic');
            // $table->string('empIDpic');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('memberships');
    }
};
